import { Stack } from '@mui/material'
import React from 'react'
import Phone from './CircleComponent'

type Props = {}

const ChallengesByPV = (props: Props) => {
  return (
    <Stack direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    style={{
      minHeight: "100vh", // Make the container at least full viewport height
      background: 'linear-gradient(90deg, #5F709E, #ffff)',
      padding: "20px",
    }}>
       <div style={{ padding: "20px" }}>
      <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>
      Challenges faced by Conventional Glass-top Solar PV Modules today
      </p>
      <Phone />
      </div>
      </Stack>
  )
}

export default ChallengesByPV