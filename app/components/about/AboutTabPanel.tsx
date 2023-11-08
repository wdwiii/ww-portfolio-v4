'use client'

import React from 'react'
import BioTab from './BioTab'
import EducationTab from './EducationTab'
import ToolkitTab from './ToolkitTab'
import ExperienceTab from './ExperienceTab'
import { useSearchParams } from 'next/navigation'

const AboutTabPanel = () => {
  const tabPanelValue = useSearchParams()

  switch (tabPanelValue.get('tab')) {
    case 'experience':
      return <ExperienceTab />
    case 'education':
      return <EducationTab />
    case 'toolkit':
      return <ToolkitTab />
    default:
      return <BioTab />
  }
}

export default AboutTabPanel
