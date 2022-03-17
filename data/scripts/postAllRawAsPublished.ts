import { createCompany, updateCompany } from '../api'
import rawData from './rawData'

const { API_KEY } = process.env

if (!API_KEY) {
  throw new Error('API_KEY env var is required')
}

console.log(`Importing ${rawData.length} raw records`)

async function run() {
  for (let index = 0; index < rawData.length; index++) {
    const entry = rawData[index]
    try {
      const postResponse = await createCompany(entry)

      await updateCompany(
        {
          ...postResponse.data,
          status: 'published',
          country: 'Russia',
        },
        { apiKey: API_KEY! }
      )

      console.log(` - Success ${index + 1}/${rawData.length}`)
    } catch (error: any) {
      throw new Error(
        `Could not post ${JSON.stringify(entry)}: ${error.toString()}`
      )
    }
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
