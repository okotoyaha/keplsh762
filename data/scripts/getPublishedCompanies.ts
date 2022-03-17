import { DataType } from '../../types/data'
import { createCompany, getCompanies, updateCompany } from '../api'
import rawData from './rawData'

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

const PAGE_SIZE = 10
async function run() {
  const result: DataType[] = []
  let responseLength = PAGE_SIZE
  do {
    const response = await getCompanies({
      category: 'active',
      page: 1,
      size: PAGE_SIZE,
      apiKey: API_KEY!,
    })
    responseLength = response.data.items.length

    response.data.items.forEach((item: Company) => {
      result.push({
        id: item.id,
        about: item.description,
        logo: item.imageUrl,
        subject: item.title,
        sources: item.rows
          .filter((row) => row.type === 'negative')
          .map((row) => ({
            connection: row.text,
            source: row.source,
          })),
        support: item.rows
          .filter((row) => row.type === 'positive')
          .map((row) => ({
            connection: row.text,
            source: row.source,
          })),
      })
    })

    console.log(`Fetched ${responseLength} items`)
  } while (responseLength === PAGE_SIZE)

  console.log(JSON.stringify(result, null, 2))
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
