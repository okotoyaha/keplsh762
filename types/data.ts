export interface Source {
  connection: string
  source: string
}

export interface DataType {
  id?: number
  subject: string
  about: string
  logo: string
  connection?: Source['connection']
  source?: Source['source']
  sources?: Source[]
}
