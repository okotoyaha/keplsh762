import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import MiniSearch from 'minisearch'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Navbar } from '../components/Navbar/Navbar'
import { List } from '../components/List/List'
import { SubmissionModal } from '../components/SubmissionModal/SubmissionModal'

import { DataType, Source } from '../types/data'
import { data, getId } from '../data'
import Link from 'next/link'
import { Alert, IconButton, Tooltip } from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import styles from './index.module.css'

let miniSearch = new MiniSearch({
  fields: ['subject', 'about'], // fields to index for full-text search
  storeFields: ['subject', 'about', 'connection', 'source', 'logo'], // fields to return with search results
  searchOptions: {
    fuzzy: 0.2,
    prefix: true,
  },
})

data.forEach((entry) => (entry.id = getId()))
miniSearch.addAll(
  data.map((item) => ({
    ...item,
    connection:
      item.connection ||
      (item.sources || []).map((item: Source) => item.connection).join(' '),
    source:
      item.source ||
      (item.sources || []).map((item: Source) => item.source).join(' '),
  }))
)

const theme = createTheme()

const Home: NextPage = () => {
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false)
  const [results, setResults] = useState<DataType[]>([])
  const [terms, setTerms] = useState<string[]>([])

  const executeSearch = (value = '') => {
    const queryResults = miniSearch.search(value)
    const foundTerms = queryResults
      .map(({ terms }) => terms)
      .reduce((acc, terms) => [...acc, ...terms], [])

    setResults(queryResults as any)
    setTerms(foundTerms)
  }

  const onModalClose = () => {
    setIsSubmissionOpen(false)
  }
  const onSubmission = () => {
    setIsSubmissionOpen(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>stoprus.com</title>
      </Head>

      <div>
        <Navbar
          onSearch={executeSearch}
          onSubmission={onSubmission}
          title=''
          helpText={
            <>
              Rinkdamiesi prekes ar paslaugas atitinkamai įvertinkite
              informaciją pateiktą šiame puslapyje
              <br />
              <br />
              Слава Україні! Героям слава! 🇺🇦
            </>
          }
          extraIcons={
            <Link href='/buy-ukr' passHref>
              <Tooltip title='Rinkis Ukrainietišką' placement='bottom-end'>
                <IconButton component='a' className={styles.iconButton}>
                  <ShoppingCart className={styles.icon} />
                  <div className={styles.badge}>🇺🇦</div>
                </IconButton>
              </Tooltip>
            </Link>
          }
        />

        <Alert severity='warning'>
          Galimai pastebėjote, kad kai kurie prekių ženklai buvo pašalinti.
          Dalis jų buvo pašalinti dėl perspėjimų apie teisinius procesus.
          Ieškome pro-bono teisinių konsultacijų, galintys prisidėti kreipkitės
          el. paštu
          <Link href='mailto:stoprus@protonmail.com' passHref>
            <a className={styles.alertLink}>stoprus@protonmail.com</a>
          </Link>
        </Alert>

        <Alert severity='info'>
          Šis puslapis yra savanoriškas projektas, todėl dėl didelio pranešimų
          kiekio gali įsivelti klaidų. Pastebėjus, prašome pranešti mums
          <Link href='mailto:stoprus@protonmail.com' passHref>
            <a className={styles.alertLink}>stoprus@protonmail.com</a>
          </Link>
        </Alert>

        <List data={results.length ? results : data} searchWords={terms} />

        {isSubmissionOpen && (
          <SubmissionModal
            beforeForm={
              <Alert severity='warning'>Pridėkite susijusį subjektą</Alert>
            }
            onClose={onModalClose}
            endpoint='https://formpost.app/stoprus@protonmail.com'
          />
        )}
      </div>
    </ThemeProvider>
  )
}

export default Home
