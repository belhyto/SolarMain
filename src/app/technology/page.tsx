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
    <Stack direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
   paddingTop={"50px"}
   >
      <ChallengesByPV />
      <PVModules />
      <UniqueTech />
      <Testing />
    </Stack>
  )
}

export default Technology