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
              Pateikiame i??skirtinai tik kituose ??altiniuose nurodyt??
              informacij??, u?? kurios tikrum?? atsako tos informacijos skleid??jai.
            </>
          }
          extraIcons={
            <>
              <Link href='/buy-ukr' passHref>
                <Tooltip title='Rinkis Ukrainieti??k??' placement='bottom-end'>
                  <IconButton component='a' className={styles.iconButton}>
                    <ShoppingCart className={styles.icon} />
                    <div className={styles.badge}>????????</div>
                  </IconButton>
                </Tooltip>
              </Link>
              <Link href='/exited' passHref>
                <Tooltip title='Nutrauk?? s??sajas' placement='bottom-end'>
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
              Galimai pasteb??jote, kad kai kurie preki?? ??enklai buvo pa??alinti.
              Greitu metu sud??sime tai kas priklauso atgal, bei toliau pildysime
              s??ra????. Radus klaid??, prane??kite
              <Link href='mailto:stoprus@protonmail.com' passHref>
                <a className={styles.alertLink}>stoprus@protonmail.com</a>
              </Link>
            </Alert>
          )}

          {!seenExitedBanner && (
            <Alert severity='success' onClose={() => setSeenExitedBanner(true)}>
              Taip pat prad??jome rinkti
              <Link href='/exited' passHref>
                <a className={styles.alertLink}>s??ra???? subjekt??</a>
              </Link>
              , kurie parei??k?? ketinimus nutraukti s??sajas ir/arba konkre??iais
              veiksmais par??m?? Ukrain??. ??iuo metu labai reikia patikim?? duomen??!
              D??kui!
            </Alert>
          )}
        </div>

        <List data={results.length ? results : data} searchWords={terms} />

        {isSubmissionOpen && (
          <SubmissionModal
            beforeForm={
              <Alert severity='warning'>Prid??kite susijus?? subjekt??</Alert>
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
