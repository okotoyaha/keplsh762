import { DataType } from '../../types/data'
import { createCompany, updateCompany } from '../api'
import rawData from './rawData'

const { API_KEY } = process.env

if (!API_KEY) {
  throw new Error('API_KEY env var is required')
}

console.log(`Importing ${rawData.length} raw records`)

function positiveOnly(entry: DataType) {
  return {
    ...entry,
    support: [
      ...(entry.support || []),
      ...(entry.sources || [
        { source: entry.source!, connection: entry.connection! },
      ]),
    ],
    sources: [],
    source: undefined,
    connection: undefined,
  }
}

async function run() {
  for (let index = 0; index < rawData.length; index++) {
    let entry = rawData[index]
    entry = positiveOnly(entry)
    try {
      const postResponse = await createCompany(entry)

      await updateCompany(
        {
          ...postResponse.data,
          status: 'published',
          country: 'russia',
          category: 'refused',
        },
        { apiKey: API_KEY! }
      )

      console.log(` - Success ${index + 1}/${rawData.length}`)
    } catch (error: any) {
      throw new Error(
        `Could not post ${JSON.stringify(entry)}:\n\n${
          error.response?.data?.message || error.toString()
        }`
      )
    }
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
