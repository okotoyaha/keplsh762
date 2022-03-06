import { useEffect, useRef, useContext } from 'react'

import ListItemAvatar from '@mui/material/ListItemAvatar'
import Typography from '@mui/material/Typography'
import MUIList from '@mui/material/List'
import MUIListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Info from '@mui/icons-material/Info'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { useMediaQuery, useTheme } from '@mui/material'
import Highlighter from 'react-highlight-words'

import { useInViewport } from 'ahooks'

import { DataType } from '../../types/data'
import { StorageContext } from '../Storage/Storage'

import styles from './ListItem.module.css'

interface Props extends DataType {
  searchWords: string[]
  supportLabel?: React.ReactNode
}

const FIVE_SECONDS = 5000

export const ListItem = ({
  subject,
  logo,
  searchWords,
  about,
  sources,
  source,
  connection,
  support,
  supportLabel,
}: Props) => {
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const { hasSeenSubject, setSubjectSeen } = useContext(StorageContext)

  const ref = useRef()
  const [inViewport] = useInViewport(ref, { threshold: 1 })

  useEffect(() => {
    const isFullyVisible = inViewport

    if (isFullyVisible) {
      setTimeout(() => setSubjectSeen(subject), FIVE_SECONDS)
    }
  }, [inViewport])

  const logoAvatar = (
    <Avatar alt={subject} src={logo} variant='square' className={styles.logo} />
  )

  return (
    <MUIListItem alignItems='flex-start' component='div'>
      <ListItemAvatar className={styles.listItemAvatar} ref={ref}>
        {hasSeenSubject(subject) ? (
          logoAvatar
        ) : (
          <Badge
            color='warning'
            badgeContent='Nauja'
            invisible={hasSeenSubject(subject)}
            children={logoAvatar}
          />
        )}
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
              <Highlighter searchWords={searchWords} textToHighlight={about} />
            </Typography>
          </div>
        }
        secondary={
          <Grid container gridAutoRows={1}>
            <Grid item xs={12} md>
              <MUIList component='div'>
                {(sources || [{ source, connection }]).map(
                  ({ source = '', connection = '' }) => (
                    <MUIListItem
                      key={`${source} ${connection}`}
                      className={styles.sourceListItem}
                      component='div'
                    >
                      <ListItemAvatar className={styles.sourcesAvatar}>
                        <Tooltip title={source || ''} placement='right'>
                          <a
                            href={source}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <IconButton edge='end' aria-label='delete'>
                              <Info sx={{ fontSize: 16 }} />
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
                    </MUIListItem>
                  )
                )}
              </MUIList>
            </Grid>
            {support && support.length && (
              <>
                <Grid item xs={12} md='auto'>
                  <Divider
                    orientation={smallScreen ? 'horizontal' : 'vertical'}
                    flexItem
                    sx={{ height: { md: '100%' } }}
                  >
                    {supportLabel}
                  </Divider>
                </Grid>
                <Grid item xs={12} md>
                  <MUIList component='div'>
                    {support.map(({ source, connection }) => (
                      <MUIListItem
                        key={`${source}_${connection}`}
                        className={styles.sourceListItem}
                        component='div'
                      >
                        <ListItemAvatar className={styles.sourcesAvatar}>
                          <Tooltip title={source || ''} placement='right'>
                            <a
                              href={source}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              <IconButton edge='end' aria-label='delete'>
                                <Info sx={{ fontSize: 16 }} />
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
                      </MUIListItem>
                    ))}
                  </MUIList>
                </Grid>
              </>
            )}
          </Grid>
        }
        secondaryTypographyProps={{ component: 'div' }}
      />
    </MUIListItem>
  )
}
