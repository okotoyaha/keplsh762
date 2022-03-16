import rateLimit from 'axios-rate-limit'
import axios from 'axios'
import { DataType } from '../types/data'

const axiosLimited = rateLimit(axios.create(), { maxRPS: 5 })

const POST_URL = 'https://api.suukraina.lt/v1/company'
export function submitData({
  subject,
  about,
  logo,
  connection,
  source,
  sources,
  support,
}: DataType) {
  const data = {
    title: subject,
    description: about,
    category: 'active',
    imageUrl: logo,
    rows: [
      ...(sources || [{ connection, source }]).map(
        ({ connection, source }) => ({
          type: 'negative',
          text: connection,
          source: source,
        })
      ),
      ...(support || []).map(({ connection, source }) => ({
        type: 'positive',
        text: connection,
        source: source,
      })),
    ],
  }

  return axiosLimited.post(POST_URL, data)
}
