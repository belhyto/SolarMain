import { Stack } from '@mui/material'
import React from 'react'
import pv from "../../../public/assets/pvmodule.png"
import pvVideo from "../../../public/assets/pvVid.mp4"  // Import the video file

type Props = {}

const pvImageDiv = {
    backgroundColor: "#F6F4FF",
    backdropFilter: "blur(5px)",
    color: "#fff",
    border: "2px solid white",
    borderRadius: "40px",
    padding: "8px",
    marginBottom: "16px",
    fontSize: "16px"
}

const PVModules = (props: Props) => {
  return (
    <Stack>
      <div style={{ background: 'linear-gradient(90deg, #ffff, #5F709E)', padding: "100px" }}>
        <p className="text-4xl text-center p-4 font-bold" style={{ fontFamily: 'Conthrax Sb' }}>
          PV MODULES
        </p>
        <Stack sx={pvImageDiv}>
          {/* Replace the img with the video */}
          <video autoPlay loop muted style={{ width: "100%", height: 'auto', borderRadius:"20px" }}>
            <source src={pvVideo} type="video/mp4" /> {/* Use the video file directly */}
            Your browser does not support the video tag.
          </video>
          <p className='text-medium' style={{ color: '#202542', padding: "10px" }} >Over 95% of PV Modules made today worldwide are based on the above architecture with minor
            improvements in crystals, perc, diodes, silicon impregnation techniques, busbars.</p>
        </Stack>
      </div>
    </Stack>
  )
}
export default PVModules
