import { useContext, useEffect, useState, Fragment } from 'react'

import MUIList from '@mui/material/List'
import Divider from '@mui/material/Divider'

import { ListItem } from '../ListItem/ListItem'

import { DataType } from '../../types/data'
import { StorageContext } from '../Storage/Storage'

interface Props {
  data: DataType[]
  searchWords: string[]
  supportLabel?: React.ReactNode
}

export const List = ({
  data = [],
  searchWords = [],
  supportLabel = 'BET',
}: Props) => {
  const [orderedList, setOrderedList] = useState<DataType[]>([])
  const { hasSeenSubject } = useContext(StorageContext)

  useEffect(() => {
    let newOrderedList = [...data]

    newOrderedList.sort((a, b) => {
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

    setOrderedList(newOrderedList)
  }, [])

  return (
    <MUIList component='div'>
      {orderedList.map((item) => (
        <Fragment key={item.subject}>
          <ListItem
            {...item}
            searchWords={searchWords}
            supportLabel={supportLabel}
          />
          <Divider component='div' />
        </Fragment>
      ))}
    </MUIList>
  )
}
