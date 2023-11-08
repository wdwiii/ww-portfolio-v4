'use client'
import { useMediaQuery, useTheme } from '@mui/material'

export default function useThemeLogic() {
  const theme = useTheme()
  const isLightTheme = theme.palette.mode === 'light'

  return { theme, isLightTheme }
}
