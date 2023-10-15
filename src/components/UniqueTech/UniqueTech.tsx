import { Stack } from '@mui/material';
import HoverCard from '../MeetSedi/HoverCard';
import React from 'react';
import weight from "../../../public/assets/weight.png";
import hammer from "../../../public/assets/hammer.png";
import maximize from "../../../public/assets/maximize.png";
import support from "../../../public/assets/support.png";
import money from "../../../public/assets/money.png";
import chart from "../../../public/assets/chart.png";
import line from "../../../public/assets/line-chart.png";

type Props = {};

const stackCss = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 4,
  textAlign: "justify"
};

const smallerHoverCardContainerSx = {
  width: '290px', // Adjust the width as needed
  height: 'auto', // Let the height adjust automatically
  padding: "0px",
};
const UniqueTech = (props: Props) => {
  return (
    <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} 
        style={{ background: "#818FB3", padding: "50px 1px"}}>
      <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>
      Limitations of conventional PV modules
      </p>
      <Stack sx={stackCss}>
        <div style={smallerHoverCardContainerSx}>
          <HoverCard
            title="Weight"
            detail="Conventional PV modules weigh between 25-30kg per module. In addition, the underlaying steel/Al rail support structures required to keep these modules at the perfect tilt and position add  another 7-12Kgs per sqmtr. This weight implies that conventional modules may not be suitable for lightweight, old or heritage roof structures or even structures having sensitive surfacing like insulation or waterproofing."
            img={weight.src}
          />
        </div>
        <div style={smallerHoverCardContainerSx}>
          <HoverCard
            title="Durability"
            detail="Conventional PV modules employ a thick tempered glass surface to allow sunlight to hit the solar cells below. Glass by nature is brittle and fragile and can be easily cracked during transportation or installation. Further sand storms, hail storms and even birds can cause abrasion, cracks, micro-fissures or breakage to the glass surface, rendering the solar module inoperable. "
            img={hammer.src}
          />
        </div>
        <div style={smallerHoverCardContainerSx}>
        <HoverCard title="Maintenance" detail="Conventional PV modules require higher maintenance due to their fragile nature. Micro-fissures and hotspots develop more often. Cleaning the surface regularly with costly distilled water is essential. Dusty conditions need more frequent cleaning since glass is inherently static and attracts dust particles on its surface. Cost of maintenance is relatively high." img={support.src} />
         
        </div>
         <div style={smallerHoverCardContainerSx}>
        <HoverCard title="Area" detail="Solar technology, though termed as clean energy, is inherently an inefficient energy source, providing only 20-22% output. This implies very large areas of land required to generate even moderate amount of energy. At an average 6-8 acres are needed to create 1MW solar energy. With cost of real estate escalating, and solar farms replacing conventional forests and farmland, this is a hard balance to maintain." img={maximize.src} />
        
        </div>
        <div style={smallerHoverCardContainerSx}>
        <HoverCard title="Cost of Install" detail=" Conventional PV modules have to be handled with care and installed accurately. Cost of installation is high considering transportation, mechanized lifters at site, installation of steel/Aluminium structural supports, civil works  for foundation, soil survey, electrical grounding,  and sometimes reinforcement in case of existing load bearing structures." img={money.src} />
        
        </div>
        <div style={smallerHoverCardContainerSx}>
        
        <HoverCard title="Degradation" detail="Solar modules inherently degrade through their lifetime. Depending on ambient conditions the average life of a solar module is 15-25 years. Factors that speed up degradation in Solar modules are heat, humidity, dust, PIDs effect and quality of maintenance. Conventional panels tend to degrade faster in hot climates due to the combination of glass top and Al framing which is believed to accelerate degradation." img={chart.src} />
        </div>
        <div style={smallerHoverCardContainerSx}>
        <HoverCard title="Efficiency" detail="Solar technology worldwide in the 2020s have reached a plateau in terms of efficiency. The average efficiency of Tier1 conventional monocrystalline PV modules today ranges within the 19-22% bandwidth, in-spite of a number of innovations in composition, and design. Also, this level of efficiency is only achieved under optimal operating conditions in terms of angle of tilt and orientation, temperature, humidity, air quality etc." img={line.src} />
        </div>
      </Stack>
    </Stack>
  );
}

export default UniqueTech;
