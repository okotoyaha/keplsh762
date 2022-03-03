import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import IconButton from '@mui/material/IconButton'
import Info from '@mui/icons-material/Info'
import Tooltip from '@mui/material/Tooltip'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import MUIList from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'
import Home from '@mui/icons-material/Home'
import Highlighter from 'react-highlight-words'

import styles from './List.module.css'

import { DataType } from '../../types/data'

interface Props {
  data: DataType[]
  searchWords: string[]
}

const LL = () => {}
export const List = ({ data = [], searchWords = [] }: Props) => {
  return (
    <MUIList component='div'>
      {data.map(({ subject, about, connection, source, sources, logo }) => (
        <>
          <ListItem alignItems='flex-start' component='div'>
            <ListItemAvatar className={styles.listItemAvatar}>
              <Avatar
                alt={subject}
                src={logo}
                variant='square'
                className={styles.logo}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <div className={styles.listHeader}>
                  <Typography component='span' variant='subtitle2'>
                    <Highlighter
                      searchWords={searchWords}
                      textToHighlight={subject}
                    />
                  </Typography>
                  {' - '}
                  <Typography component='span' variant='body2'>
                    <Highlighter
                      searchWords={searchWords}
                      textToHighlight={about}
                    />
                  </Typography>
                </div>
              }
              secondary={
                <MUIList component='div'>
                  {(sources || [{ source, connection }]).map(
                    ({ source, connection }) => (
                      <ListItem
                        key={source}
                        className={styles.sourceListItem}
                        component='div'
                      >
                        <ListItemAvatar className={styles.sourcesAvatar}>
                          <Tooltip title={source} placement='right'>
                            <a
                              href={source}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <IconButton edge='end' aria-label='delete'>
                                <Info
                                  // className={styles.infoIcon}
                                  sx={{ fontSize: 16 }}
                                />
                              </IconButton>
                            </a>
                          </Tooltip>
                        </ListItemAvatar>
                        <ListItemText
                          secondary={
                            <Typography component='span' variant='caption'>
                              <Highlighter
                                searchWords={searchWords}
                                textToHighlight={connection}
                              />
                            </Typography>
                          }
                        />
                      </ListItem>
                    )
                  )}
                </MUIList>
              }
            />
          </ListItem>
          <Divider component='div' />
        </>
      ))}
    </MUIList>
  )
}
