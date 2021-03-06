import { createCompany } from '../api'
import rawData from './rawData'

console.log(`Importing ${rawData.length} raw records`)

async function run() {
  for (let index = 0; index < rawData.length; index++) {
    const entry = rawData[index]
    try {
      await createCompany(entry)

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
