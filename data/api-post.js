const limit = require('simple-rate-limiter')
const request = limit(require('request')).to(10).per(1000)

const { raw } = require('./raw')

console.log(raw.length)

raw.forEach(async (entry) => {
  const body = {
    title: entry.subject,
    description: entry.about,
    category: 'active',
    imageUrl: entry.logo,
    rows: [
      {
        type: 'negative',
        text: entry.connection,
        source: entry.source,
      },
    ],
  }

  const promise = new Promise((resolve, reject) => {
    request(
      {
        url: 'https://api.suukraina.lt/v1/company',
        method: 'POST',
        json: true,
        body,
      },

      (error, response, body) => {
        if (error) {
          reject(error)
        }

        resolve({ body, status: response.statusCode })
      }
    )
  })

  const { body: responseBody, status } = await promise

  console.log('Status:', status, responseBody, body.subject)
})
