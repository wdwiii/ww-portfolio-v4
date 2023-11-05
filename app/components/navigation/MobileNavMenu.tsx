'use client'

import { Close } from '@mui/icons-material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Fab, Modal, Stack, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Menu, { MenuProps } from '@mui/material/Menu'
import { alpha, styled } from '@mui/material/styles'
import * as React from 'react'
import NavLogo from './NavLogo'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}))

export default function MobileNavMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        id='demo-customized-button'
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        disableElevation
        disableRipple
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        color='secondary'
      >
        Menu
      </Button>
      <Modal
        open={open}
        onClick={handleClose}
        slotProps={{ backdrop: { transitionDuration: 500 } }}
        sx={theme => ({
          // background: alpha(theme.palette.secondary.main, 0.75),
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
            <Fab>
              <Close />
            </Fab>
          </Stack>
        </Stack>
      </Modal>
    </>
  )
}
