'use client'

import useThemeLogic from '@/app/hooks/useThemeLogic'
import { Close } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Fab, Modal, Stack, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import { alpha } from '@mui/material/styles'
import NavLogo from './NavLogo'
import { useState } from 'react'

export default function MobileNavMenu() {
  const [open, setOpen] = useState<boolean>(false)
  const { isLightTheme } = useThemeLogic()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        id='demo-customized-button'
        aria-controls={open ? 'customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        disableRipple
        onClick={handleClick}
        color={isLightTheme ? 'primary' : 'secondary'}
        size='large'
      >
        Menu
      </Button>
      <Modal
        open={open}
        onClick={handleClose}
        slotProps={{ backdrop: { transitionDuration: 500 } }}
        sx={theme => ({
          background: alpha(theme.palette.secondary.main, 0.75),
          backdropFilter: 'blur(15px)',
          zIndex: 3000,
        })}
      >
        <Stack justifyContent='space-between' py={5} height={'100vh'}>
          <Stack alignItems='center'>
            <NavLogo height={50} src='/assets/logo-alt.png' />
          </Stack>
          <Stack spacing={2}>
            <Typography variant='display1' align='center'>
              About
            </Typography>
            <Typography variant='display1' align='center'>
              Projects
            </Typography>
            <Typography variant='display1' align='center'>
              Resume
            </Typography>
            <Typography variant='display1' align='center'>
              Contact
            </Typography>
          </Stack>
          <Stack alignItems='center'>
            <Fab onClick={handleClose}>
              <Close />
            </Fab>
          </Stack>
        </Stack>
      </Modal>
    </>
  )
}
