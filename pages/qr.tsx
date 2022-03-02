import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import QrScanner from '../components/QrScanner/QrScanner'
import { AppBar, Button, IconButton, Toolbar, Tooltip } from '@mui/material'
import Link from 'next/link'

const theme = createTheme()

const Qr: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Patikrinti produkto kilmę</title>
      </Head>

      <div>
        <AppBar position='static'>
          <Toolbar>
            <Link href='/' passHref>
              <Tooltip title='Grįžti į sąrašą' placement='right'>
                <IconButton color='inherit' aria-label='Atgal' component='a'>
                  <ArrowBackIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </Toolbar>
        </AppBar>
        <QrScanner />
      </div>
    </ThemeProvider>
  )
}

export default Qr
