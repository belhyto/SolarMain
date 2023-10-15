import React from "react";
import { styled } from "@mui/system";
import "./circle.css"
import {  Paper, Stack } from "@mui/material";
const paperCss = {
   
    width:"700px",
    height:"250px",
    flexBasis: 'calc(90% / 2)',
    color: "#000",
    borderRadius: "40px",
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    padding: "16px",
    fontSize: "15px",
    textAlign:"center",
    transition: 'transform 0.3s ease',
    '@media (max-width: 500px)': {
      flexBasis: 'calc(100% / 1)',
      '&:hover': {
        transform: 'scale(1)', // Change the hover effect for small screens
      }
    },
  }

const Phone = () => {
  return (
   <Stack direction={{md:'row',sm:'column',xs:'column'}} maxWidth={'1200px'} alignItems={'center'} justifyContent={'space-between'} spacing={5} padding={"36px 16px"}>
        
        <Stack direction={'row'} flexWrap={'wrap'} gap={3}>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">Ultra-Slim design</p>
                <p style={{textAlign: "justify"}}>Our special manufacturing process ensures that our solar panels are only 2-3mm thick. Conventional panels are around 50mm thick, and when installed on their metal support structure, can be as high as 300mm, making them unsuitable for windy conditions, mobile solar, or discrete installations.</p>
            </Paper>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">Flexible </p>
                <p style={{textAlign: "justify"}}>The SEDI Modules are very flexible, allowing them to conform to the contour of the substructure of the building or project, unlike glass top conventional modules that are brittle and fragile and therefore more prone to micro-fissures and cracks.</p>
            </Paper>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">Ruggedized</p>
                <p style={{textAlign: "justify"}}>Shock absorbing, fully laminated surface provides SEDI modules a very high level of durability against weather, accidents or malicious attempts. Unlike conventional panels that are extremely brittle, fragile, heavy and are easily damaged during transportation and installation.</p>

            </Paper>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">Superior light behaviour</p>
                <p style={{textAlign: "justify"}}>All SEDI modules are designed with mono-crystalline half cut Tier 1 cell technology and offer much better yield in low light and shadow by virtual of a unique nano-surface lenticular structure allowing light refraction. Also the nano-layering gathers diffused light more efficiently.</p>
            </Paper>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">High energy yield</p>
                <p style={{textAlign: "justify"}}>All SEDI modules are designed with mono-crystalline half cut Tier 1 cell technology and provide better energy yield in any orientation*, by virtue top quality components, revolutionary polymer lamination and more efficient utilization of sunlight by the refractive effect generated by the lenticular surface.</p>
            </Paper>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">Easily mounted</p>
                <p style={{textAlign: "justify"}}>SEDI modules can be glued, screwed or riveted onto the surface of any building, roof or structure. As long as direct sunlight hits the panel it can be mounted in any inclination as well. It does not need any additional metal support rails or substructure. SEDI reduces cost and time of installation greatly.</p>
            </Paper>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">Heat Management</p>
                <p style={{textAlign: "justify"}}>SEDI modules are able to extract heat very efficiently on the surface of the module itself, unlike conventional modules which can only dissipate heat from the underbelly of the module. This allows flat installation of SEDI modules on surfaces without loss of efficiency or degradation.  </p>
            </Paper>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">Intrinsically Safe </p>
                <p style={{textAlign: "justify"}}>SEDI modules have no Aluminium framing on them, unlike conventional panels. Hence conventional panels critically must be grounded at regular intervals, to protect installers against electrical current leakage on a string. SEDI modules do not require any grounding and are intrinsically much safer to install and maintain. Being lighter and non-glass, professional and third party insurance for installers is much lower. </p>
            </Paper>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">Project-specific solutions</p>
                <p style={{textAlign: "justify"}}>SEDI modules can be manufactured in any size* or color** in order to customize them to fit the demands of a project. Certain minimum order quantities and efficiency degradation allowances must be considered by the installer in these cases.</p>
            </Paper>
            <Paper sx={paperCss} >
                <p className="text-xl font-bold">Warranty</p>
                <p style={{textAlign: "justify"}}>SEDI technology offers superior performance and offers an unsurpassed 25-year product warranty and 40-year linear performance warranty.</p>
            </Paper>
        </Stack>
   </Stack>
  );
};

export default Phone;
