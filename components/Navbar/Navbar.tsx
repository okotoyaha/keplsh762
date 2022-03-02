import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import AddTaskSharpIcon from '@mui/icons-material/AddTaskSharp'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import QrCodeScanner from '@mui/icons-material/QrCodeScanner'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { styled } from '@mui/material/styles'
import { useLocalStorage } from '../../utils/useLocalStorage'

import styles from './Navbar.module.css'
import Link from 'next/link'

const CustomWidthTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
    padding: '2rem',
  },
})

interface Props {
  onSearch: (value: string) => void
  onSubmission?: () => void
  title: React.ReactNode
  helpText: React.ReactNode
  extraIcons?: React.ReactNode
}

export const Navbar = ({
  onSearch,
  onSubmission,
  title,
  helpText,
  extraIcons,
}: Props) => {
  const [aboutShown, setAboutShown] = useLocalStorage('aboutShown', '')

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          {onSubmission && (
            <Tooltip title='Pridėti daugiau subjektų' placement='bottom-end'>
              <IconButton onClick={onSubmission}>
                <AddTaskSharpIcon className={styles.icon} />
              </IconButton>
            </Tooltip>
          )}

          <Link href='/qr' passHref>
            <Tooltip
              title='Tikrinti kilmės šalį pagal brukšninį kodą'
              placement='bottom-end'
            >
              <IconButton component='a'>
                <QrCodeScanner className={styles.icon} />
              </IconButton>
            </Tooltip>
          </Link>

          {extraIcons}

          <CustomWidthTooltip
            {...(aboutShown !== 'shown' ? { open: true } : {})}
            enterTouchDelay={1}
            leaveTouchDelay={5000}
            title={
              <Typography>
                {helpText}
                {aboutShown !== 'shown' && (
                  <>
                    <br />
                    <br />
                    <Button
                      size='small'
                      color='success'
                      variant='contained'
                      fullWidth
                      onClick={() => {
                        setAboutShown('shown')
                      }}
                    >
                      Supratau, uždaryti
                    </Button>
                  </>
                )}
              </Typography>
            }
            placement='bottom-end'
          >
            <IconButton>
              <HelpOutlineIcon className={styles.icon} />
            </IconButton>
          </CustomWidthTooltip>

          <Link href='mailto:stoprus@protonmail.com' passHref>
            <Tooltip
              title='Parašykite mums, jeigu turite klausimų ar pasiūlymų: stoprus@protonmail.com'
              placement='bottom-end'
            >
              <IconButton component='a'>
                <MailOutlineIcon className={styles.icon} />
              </IconButton>
            </Tooltip>
          </Link>

          <Typography
            variant='caption'
            noWrap
            component='span'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            className={styles.title}
          >
            {title}
            {/* Is It Connected To russia? */}
          </Typography>

          <div className={styles.search}>
            <Grid
              container
              direction='row'
              alignItems='center'
              className={styles.search}
            >
              <SearchIcon />
              <InputBase
                placeholder='Ieškoti...'
                className={styles.searchInput}
                onChange={onSearchChange}
              />
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
