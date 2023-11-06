'use client'
import React, { useState } from 'react'
import { Tabs, Tab } from '@mui/material'
import useThemeLogic from '@/app/hooks/useThemeLogic'
const AboutTabs = () => {
  const [tabValue, setTabValue] = useState<number>(1)
  const { isLightTheme } = useThemeLogic()
  return (
    <Tabs
      textColor={isLightTheme ? 'primary' : 'secondary'}
      indicatorColor='secondary'
      variant='fullWidth'
      value={tabValue}
      onChange={(event, newValue) => setTabValue(newValue)}
    >
      <Tab value={1} label='Bio' />
      <Tab value={2} label='Experience' />
      <Tab value={3} label='Skills' />
    </Tabs>
  )
}

export default AboutTabs
