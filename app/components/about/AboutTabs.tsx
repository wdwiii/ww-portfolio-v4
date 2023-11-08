'use client'
import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from '@mui/material'
import useThemeLogic from '@/app/hooks/useThemeLogic'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const AboutTabs = () => {
  const [selectedTabValue, setSelectedTabValue] = useState<number>(1)
  const tabPanelValue = useSearchParams().get('tab')

  useEffect(() => {
    if (!tabPanelValue) setSelectedTabValue(1)
  }, [tabPanelValue])

  const { isLightTheme } = useThemeLogic()
  return (
    <Tabs
      textColor={isLightTheme ? 'primary' : 'secondary'}
      indicatorColor='secondary'
      variant='fullWidth'
      value={selectedTabValue}
      onChange={(event, newValue) => setSelectedTabValue(newValue)}
    >
      <Tab value={1} label='Bio' href='/about?tab=bio' LinkComponent={Link} />
      <Tab
        value={2}
        label='Experience'
        href='/about?tab=experience'
        LinkComponent={Link}
      />
      <Tab
        value={3}
        label='Education'
        href='/about?tab=education'
        LinkComponent={Link}
      />

      <Tab
        value={4}
        label='Toolkit'
        href='/about?tab=toolkit'
        LinkComponent={Link}
      />
    </Tabs>
  )
}

export default AboutTabs
