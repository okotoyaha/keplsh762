import rateLimit from 'axios-rate-limit'
import axios from 'axios'
import { DataType } from '../types/data'

const axiosLimited = rateLimit(axios.create(), { maxRPS: 5 })

function buildRows({
  sources,
  connection,
  source,
  support,
}: Partial<DataType>) {
  return [
    ...(sources || [{ connection, source }]).map(({ connection, source }) => ({
      type: 'negative',
      text: connection,
      source: source,
    })),
    ...(support || []).map(({ connection, source }) => ({
      type: 'positive',
      text: connection,
      source: source,
    })),
  ]
}

const BASE_URL = 'https://api.suukraina.lt/v1'
export function createCompany({
  subject,
  about,
  logo,
  connection,
  source,
  sources,
  support,
  category = 'active',
  country,
}: DataType & { category?: 'active' | 'refused'; country?: string }) {
  const data = {
    title: subject,
    description: about,
    category,
    country,
    imageUrl: logo,
    rows: buildRows({ sources, connection, source, support }),
  }

  return axiosLimited.post(`${BASE_URL}/company`, data)
}

export function updateCompany(
  {
    id,
    status,
    country,
    category = 'active',
    subject,
    about,
    logo,
    connection,
    source,
    sources,
    support,
  }: DataType & {
    id: string
    status: 'published' | 'new' | 'reviewed' | 'waiting'
    country?: string
    category: 'active' | 'refused'
  },
  { apiKey }: { apiKey: string }
) {
  const data = {
    id,
    status,
    country,
    title: subject,
    description: about,
    category,
    imageUrl: logo,
    rows: buildRows({ sources, connection, source, support }),
  }

  return axiosLimited.put(`${BASE_URL}/company`, data, {
    headers: { 'x-api-key': apiKey },
  })
}

export function getCompanies({
  category,
  page = 1,
  size = 250,
  apiKey,
}: {
  category: 'active' | 'refused'
  page?: number
  size?: number
  apiKey: string
}) {
  return axiosLimited.get(
    `${BASE_URL}/companies?size=${size}&category=${category}&page=${page}`,
    {
      headers: { 'x-api-key': apiKey },
    }
  )
}
