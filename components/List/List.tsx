import { useContext, useMemo } from 'react'

import MUIList from '@mui/material/List'
import Divider from '@mui/material/Divider'

import { ListItem } from '../ListItem/ListItem'

import { DataType } from '../../types/data'
import { StorageContext } from '../Storage/Storage'

interface Props {
  data: DataType[]
  searchWords: string[]
}

export const List = ({ data = [], searchWords = [] }: Props) => {
  const { hasSeenSubject } = useContext(StorageContext)

  let orderedList = [...data]

  orderedList.sort((a, b) => {
    const bothSeen = hasSeenSubject(a.subject) && hasSeenSubject(b.subject)
    const hasNotSeenA = !hasSeenSubject(a.subject)

    if (bothSeen) {
      return 0
    }

    if (hasNotSeenA) {
      return -1
    }

    return 1
  })
  const memoList = useMemo(() => orderedList, [])

  return (
    <MUIList component='div'>
      {memoList.map((item) => (
        <>
          <ListItem
            {...item}
            searchWords={searchWords}
            key={JSON.stringify(item)}
          />
          <Divider component='div' />
        </>
      ))}
    </MUIList>
  )
}
