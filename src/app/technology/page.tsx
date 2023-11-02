"use client"
import ChallengesByPV from '@/components/ChallengesByPV/ChallengesByPV'
import PVModules from '@/components/PVModules/PVModules'
import Testing from '@/components/Testing/Testing'
import UniqueTech from '@/components/UniqueTech/UniqueTech'
import { Stack } from '@mui/material'
import React from 'react'
type Props = {}
const Technology = (props: Props) => {
  return ( 
    <Stack  
    
   paddingTop={"90px"}
   > 
      <ChallengesByPV />
      <PVModules />
      <UniqueTech />
      <Testing />
    </Stack>
  )
}
export default Technology
