const rateLimit = require('axios-rate-limit')
const axios = require('axios')

const axiosLimited = rateLimit(axios.create(), { maxRPS: 5 })

const { raw } = require('./raw')

console.log(raw.length)

raw.forEach(async (entry) => {
  try {
    const response = await submitData(entry)

    console.log('Success: ', response)
  } catch (error) {
    console.log('Error:', error)
  }
})

const POST_URL = 'https://api.suukraina.lt/v1/company'
const submitData = ({ subject, about, logo, connection, source }) => {
  const data = {
    title: subject,
    description: about,
    category: 'active',
    imageUrl: logo,
    rows: [
      {
        type: 'negative',
        text: connection,
        source: source,
      },
    ],
  }

  return axiosLimited.post(POST_URL, data)
}

module.exports.submitData = submitData
module.exports.POST_URL = POST_URL
