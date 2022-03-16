import { submitData } from '../apiPost'
import rawData from './rawData'

console.log(`Importing ${rawData.length} raw records`)

rawData.forEach(async (entry, index) => {
  try {
    await submitData(entry)

    console.log(` - Success ${index + 1}/${rawData.length}`)
  } catch (error) {
    console.log('Error:', error, entry)
  }
})
