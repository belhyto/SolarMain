import { Box, Card, CardContent, Typography } from '@mui/material';
import { title } from 'process';
import React, { useState } from 'react'

type Props = {
  image:string[];
  detail:string
}

const TestCard = ({image,detail}: Props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnterF = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeaveF = () => {
      setIsHovered(false);
    };
  return (
    <Box onMouseEnter={handleMouseEnterF} onMouseLeave={handleMouseLeaveF} padding={'28px 12px'} sx={{display:"flex",flexWrap:'wrap',width:"100%",justifyContent:"center",alignItems:"center"}}>
      <Card
        sx={{
          maxWidth: 500,
          height: 500,  
          transition: "transform 0.5s",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          // backdropFilter:'blur(5px)',
          padding:"16px 16px"
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
          }}
        >{image.map((item,id)=>{
          return(<div key={id} style={{display:'flex'}}>
            <img src={item} alt='img' style={{maxWidth:'300px',height:'auto'}} />
          </div>)
        })}
        <p className='text-lg text-center pt-2'>{detail}</p>
        </CardContent>
      </Card>
    </Box>
  )
}

export default TestCard