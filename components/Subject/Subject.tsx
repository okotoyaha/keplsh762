import React from 'react'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Highlighter from 'react-highlight-words'
import styles from './Subject.module.css'

interface Props {
  logo?: string
  searchWords: string[]
  subject: string
}

const LOGO_FALLBACK =
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png'

export const Subject = ({ logo, searchWords, subject }: Props) => {
  return (
    <Grid container direction='row' alignItems='center'>
      <Avatar
        src={logo || LOGO_FALLBACK}
        variant='rounded'
        className={styles.avatar}
        sx={{ width: 64, height: 64 }}
        imgProps={{ sx: { objectFit: 'contain' } }}
      />

      <Highlighter searchWords={searchWords} textToHighlight={subject} />
    </Grid>
  )
  // return (
  //   <CardHeader
  //     className={styles.cardHeader}
  //     avatar={<Avatar src={logo || LOGO_FALLBACK} variant='rounded' />}
  //     title={}
  //   />
  // )
}
