import React, { FC } from 'react'
import { useLocalStorageState } from 'ahooks'

interface Props {
  hasSeenSubject: (subject: string) => boolean
  setSubjectSeen: (subject: string) => void
}
export const StorageContext = React.createContext<Props>({
  hasSeenSubject: () => false,
  setSubjectSeen: (subject: string) => {
    console.log(subject)
  },
})

const getStorageKey = (value: string) => value.replace(' ', '-').toLowerCase()

export const Storage: FC = ({ children }) => {
  const [seen, setSeen] = useLocalStorageState<string[]>('seen-list', {
    defaultValue: [],
  })

  const setSubjectSeen = (subject: string) => {
    const subjectKey = getStorageKey(subject)

    if (!seen.includes(subjectKey)) {
      setSeen((currentSeen = []) => {
        const newList = [...currentSeen]

        newList.push(subjectKey)

        return newList
      })
    }
  }

  const hasSeenSubject = (subject: string) => {
    const subjectKey = getStorageKey(subject)

    return seen.includes(subjectKey)
  }

  const value = { hasSeenSubject, setSubjectSeen }

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  )
}
