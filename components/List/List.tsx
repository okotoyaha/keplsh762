import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Info from '@mui/icons-material/Info'
import Tooltip from '@mui/material/Tooltip'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Highlighter from 'react-highlight-words'

import styles from './List.module.css'

import { DataType } from '../../types/data'
import { Subject } from '../Subject/Subject'

interface Props {
  data: DataType[]
  searchWords: string[]
}
export const List = ({ data = [], searchWords = [] }: Props) => {
  return (
    <TableContainer className={styles.container}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component='th' className={styles.tableHead}>
              Subjektas
            </TableCell>
            <TableCell component='th' className={styles.tableHead}>
              Apie
            </TableCell>
            <TableCell component='th' className={styles.tableHead}>
              <Grid container direction='row' alignItems='center'>
                Sąsaja
                <Tooltip title='Šaltinis' placement='top'>
                  <Info />
                </Tooltip>
              </Grid>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(({ subject, about, connection, source, sources, logo }) => (
            <TableRow
              key={subject}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope='row'>
                <Subject
                  logo={logo}
                  subject={subject}
                  searchWords={searchWords}
                />
                {/* <CardHeader
                  className={styles.cardHeader}
                  avatar={<Avatar src={logo || LOGO_FALLBACK} variant='rounded' />}
                  title={<Highlighter searchWords={searchWords} textToHighlight={subject} />}
                /> */}
              </TableCell>
              <TableCell>
                <Highlighter
                  searchWords={searchWords}
                  textToHighlight={about}
                />
              </TableCell>
              <TableCell>
                <Grid container direction='row' alignItems='center'>
                  <ul>
                    {(sources || [{ source, connection }]).map(
                      ({ source, connection }) => (
                        <li key={source}>
                          <Highlighter
                            searchWords={searchWords}
                            textToHighlight={connection}
                          />

                          {source && (
                            <Tooltip title={source} placement='top'>
                              <a
                                href={source}
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                <Info />
                              </a>
                            </Tooltip>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </Grid>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
