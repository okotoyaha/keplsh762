import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import MiniSearch from 'minisearch'
import styles from './index.module.css'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Navbar } from '../components/Navbar/Navbar'
import { List } from '../components/List/List'
import { SubmissionModal } from '../components/SubmissionModal/SubmissionModal'

import { DataType } from '../types/data'
import { data, getId } from '../data/ukrainianGenerated'
import Link from 'next/link'
import { Alert, IconButton, Tooltip } from '@mui/material'
import Home from '@mui/icons-material/Home'

let miniSearch = new MiniSearch({
  fields: ['subject', 'about'], // fields to index for full-text search
  storeFields: ['subject', 'about', 'connection', 'source', 'logo'], // fields to return with search results
  searchOptions: {
    fuzzy: 0.2,
    prefix: true,
  },
})

data.forEach((entry) => (entry.id = getId()))
miniSearch.addAll(data)

const theme = createTheme()

const BuyUkr: NextPage = () => {
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
        <title>Rinkis Ukrainietišką</title>
      </Head>

      <div>
        <Navbar
          onSearch={executeSearch}
          onSubmission={onSubmission}
          title='Rinkis Ukrainietišką'
          helpText={
            <>
              Pateikiame patikrintą sąrašą pilnai arba dalinai Ukrainietiško
              kapitalo verslo subjektų; verslų, kurių produkciją pirkdami galite
              bent truputį prisidėti prie nepriklausomos Ukrainos ateities
              <br />
              <br />
              Слава Україні! Героям слава! 🇺🇦
            </>
          }
          extraIcons={
            <Link href='/' passHref>
              <Tooltip title='Pradinis puslapis' placement='bottom-end'>
                <IconButton component='a' className={styles.iconButton}>
                  <Home className={styles.icon} />
                </IconButton>
              </Tooltip>
            </Link>
          }
        />

        <List
          data={results.length ? results : data}
          searchWords={terms}
          supportOnly
        />

        {isSubmissionOpen && (
          <SubmissionModal
            beforeForm={
              <Alert severity='info'>
                Pridėkite Ukrainos kompaniją ar subjektą
              </Alert>
            }
            onClose={onModalClose}
            subject='Buy UKR'
            endpoint='https://formpost.app/buyukr@protonmail.com'
          />
        )}
      </div>
    </ThemeProvider>
  )
}

export default BuyUkr
