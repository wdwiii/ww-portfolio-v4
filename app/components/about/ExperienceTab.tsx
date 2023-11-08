import { Typography, List } from '@mui/material'
import { getWorkExperienceDetails } from '../../components/homepage/WorkExperienceCard'
import WorkListItem from '../../components/homepage/WorkListItem'
import { Miniver } from 'next/font/google'
import { useEffect, useState } from 'react'

const miniver = Miniver({
  weight: '400',
  subsets: ['latin'],
})

const ExperienceTab = () => {
  const [workExperienceDetails, setWorkExperienceDetails] = useState<any>([])
  useEffect(() => {
    ;(async function () {
      const work = await getWorkExperienceDetails()
      console.log('🚀 ~ work:', work)

      setWorkExperienceDetails(work)
    })()
  }, [])
  return (
    <>
      {workExperienceDetails.length > 0 ? (
        <WorkListItem details={workExperienceDetails?.at(0) as any} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default ExperienceTab
