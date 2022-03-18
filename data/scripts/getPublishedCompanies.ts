import fs from 'fs'
import path from 'path'
import prettier from 'prettier'
import he from 'he'
import { DataType } from '../../types/data'
import { getCompanies } from '../api'

const { API_KEY } = process.env

if (!API_KEY) {
  throw new Error('API_KEY env var is required')
}

console.log(`Importing published companies`)

interface Company {
  id: number
  createdAt: string
  imageUrl: string
  title: string
  country: 'Russia' | 'Ukraine' | 'Belarus'
  description: string
  category: 'active' | 'refused'
  rows: Array<{
    id: number
    source: string
    text: string
    type: 'positive' | 'negative'
  }>
}

const PAGE_SIZE = 100

async function gatherAllPages({
  category,
}: {
  category: 'active' | 'refused'
}) {
  let responseLength = PAGE_SIZE
  let page = 0
  const results: Company[] = []
  do {
    page += 1
    const response = await getCompanies({
      category,
      page,
      size: PAGE_SIZE,
      apiKey: API_KEY!,
    })
    responseLength = response.data.items.length

    response.data.items.forEach((item: Company) => {
      results.push(item)
    })

    console.log(`Fetched ${responseLength} items`)
  } while (responseLength === PAGE_SIZE)
  return results.sort((a, b) => a.id - b.id)
}

function toDataType(company: Company) {
  return {
    id: company.id,
    about: he.decode(company.description),
    logo: company.imageUrl,
    subject: he.decode(company.title),
    sources: company.rows
      .filter((row) => row.type === 'negative')
      .map((row) => ({
        connection: he.decode(row.text),
        source: row.source,
      })),
    support: company.rows
      .filter((row) => row.type === 'positive')
      .map((row) => ({
        connection: he.decode(row.text),
        source: row.source,
      })),
  }
}

async function fetchPublishedCompanies() {
  const results = {
    index: [] as DataType[],
    exits: [] as DataType[],
    ukrainian: [] as DataType[],
  }

  const activeCompanies = await gatherAllPages({ category: 'active' })
  activeCompanies.forEach((company) => {
    const destination =
      company.country.toLowerCase() === 'ukraine'
        ? results.ukrainian
        : results.index

    destination.push(toDataType(company))
  })

  const refusedCompanies = await gatherAllPages({ category: 'refused' })
  results.exits = refusedCompanies.map(toDataType)

  return results
}

async function run() {
  const prettierConfig = await prettier.resolveConfig(__filename)
  const results = await fetchPublishedCompanies()

  const toDataFile = (json: any) =>
    prettier.format(
      `
        import { DataType } from '../types/data'

        let i = 0
        export const getId = () => i++

        export const data: DataType[] = ${JSON.stringify(json, null, 2)};
      `,
      { ...prettierConfig, filepath: 'index.ts' }
    )

  fs.writeFileSync(
    path.join(__dirname, '..', 'indexGenerated.ts'),
    toDataFile(results.index)
  )
  fs.writeFileSync(
    path.join(__dirname, '..', 'exitsGenerated.ts'),
    toDataFile(results.exits)
  )
  fs.writeFileSync(
    path.join(__dirname, '..', 'ukrainianGenerated.ts'),
    toDataFile(results.ukrainian)
  )
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
