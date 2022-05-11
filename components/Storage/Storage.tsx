import React, { FC, useCallback } from 'react'
import { useLocalStorageState } from 'ahooks'
import uniq from 'lodash-es/uniq'

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

    setSeen((currentSeen = []) => {
      if (!seen.includes(subjectKey)) {
        const newList = [...currentSeen]
        newList.push(subjectKey)

        return uniq(newList)
      }

      return currentSeen
    })
  }

  const hasSeenSubject = useCallback(
    (subject: string) => {
      const subjectKey = getStorageKey(subject)

      return seen.includes(subjectKey)
    },
    [seen]
  )

  const value = { hasSeenSubject, setSubjectSeen }

  return (
    <StorageContext.Provider value={value}>{children}</StorageContext.Provider>
  )
}
