import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import MiniSearch from 'minisearch'
import { useLocalStorageState } from 'ahooks'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Navbar } from '../components/Navbar/Navbar'
import { List } from '../components/List/List'
import { SubmissionModal } from '../components/SubmissionModal/SubmissionModal'

import { DataType, Source } from '../types/data'
import { data, getId } from '../data/indexGenerated'
import Link from 'next/link'
import { Alert, IconButton, Tooltip } from '@mui/material'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import LinkOff from '@mui/icons-material/LinkOff'

import { createCompany } from '../data/api'

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
  const [seenInfoBanner, setSeenInfoBanner] = useLocalStorageState<boolean>(
    'seen-info-banner',
    {
      defaultValue: false,
    }
  )
  const [seenExitedBanner, setSeenExitedBanner] = useLocalStorageState<boolean>(
    'seen-exited-banner',
    {
      defaultValue: false,
    }
  )

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
              Pateikiame išskirtinai tik kituose šaltiniuose nurodytą
              informaciją, už kurios tikrumą atsako tos informacijos skleidėjai.
            </>
          }
          extraIcons={
            <>
              <Link href='/buy-ukr' passHref>
                <Tooltip title='Rinkis Ukrainietišką' placement='bottom-end'>
                  <IconButton component='a' className={styles.iconButton}>
                    <ShoppingCart className={styles.icon} />
                    <div className={styles.badge}>🇺🇦</div>
                  </IconButton>
                </Tooltip>
              </Link>
              <Link href='/exited' passHref>
                <Tooltip title='Nutraukę sąsajas' placement='bottom-end'>
                  <IconButton component='a' className={styles.iconButton}>
                    <LinkOff className={styles.icon} />
                  </IconButton>
                </Tooltip>
              </Link>
            </>
          }
        />

        <div>
          {!seenInfoBanner && (
            <Alert severity='info' onClose={() => setSeenInfoBanner(true)}>
              Galimai pastebėjote, kad kai kurie prekių ženklai buvo pašalinti.
              Greitu metu sudėsime tai kas priklauso atgal, bei toliau pildysime
              sąrašą. Radus klaidų, praneškite
              <Link href='mailto:stoprus@protonmail.com' passHref>
                <a className={styles.alertLink}>stoprus@protonmail.com</a>
              </Link>
            </Alert>
          )}

          {!seenExitedBanner && (
            <Alert severity='success' onClose={() => setSeenExitedBanner(true)}>
              Taip pat pradėjome rinkti
              <Link href='/exited' passHref>
                <a className={styles.alertLink}>sąrašą subjektų</a>
              </Link>
              , kurie pareiškė ketinimus nutraukti sąsajas ir/arba konkrečiais
              veiksmais parėmė Ukrainą. Šiuo metu labai reikia patikimų duomenų!
              Dėkui!
            </Alert>
          )}
        </div>

        <List data={results.length ? results : data} searchWords={terms} />

        {isSubmissionOpen && (
          <SubmissionModal
            beforeForm={
              <Alert severity='warning'>Pridėkite susijusį subjektą</Alert>
            }
            submitMethod={(company: DataType) =>
              createCompany({
                ...company,
                country: 'russia',
                category: 'active',
              })
            }
            onClose={onModalClose}
          />
        )}
      </div>
    </ThemeProvider>
  )
}

export default Home
