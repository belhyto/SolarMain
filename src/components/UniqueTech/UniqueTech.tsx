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
};

const smallerHoverCardContainerSx = {
  width: '290px', // Adjust the width as needed
  height: 'auto', // Let the height adjust automatically
  padding: "0px",

  
};

const UniqueTech = (props: Props) => {
  return (
    <Stack direction={"column"} alignItems={"center"} justifyContent={"center"} 
        style={{ background: "#818FB3", padding: "50px"}}>
      <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>
      Unique Technological Edge Of SEDI PV Modules
      </p>
      <Stack sx={stackCss}>
        <div style={smallerHoverCardContainerSx}>
          <HoverCard
            title="Weight"
            detail="SEDI PV modules are Ultralight weight. Weigh less than 2.5Kg per sq mtr compared to conventional glass top panels that can weigh up to 35Kgs per module including structural support."
            img={weight.src}
          />
        </div>
        <div style={smallerHoverCardContainerSx}>
          <HoverCard
            title="Durability"
            detail="SEDI PV Modules have a unique rubberized surface with no glass and are flexible, allowing much more tolerance to flying projectiles , sand abrasion, hail storms, drop from heights, step on or transportation jolts compared to conventional panels."
            img={hammer.src}
          />
        </div>
        <div style={smallerHoverCardContainerSx}>
        <HoverCard title="Maintenance" detail="SEDI PV Modules have a fully laminated, non-glass structure with unique non-static surface to allow dust slide off more effectively, greatly reduces maintenance due to dust and damage. SEDI Modules can be effectively mounted vertically further reducing need to clean panels periodically." img={support.src} />
         
        </div>
         <div style={smallerHoverCardContainerSx}>
        <HoverCard title="Area" detail=" SEDI Modules can effectively be fixed flat on any surface allowing more panels per square meter surface than conventional solar arrays. Further SEDI Modules can also be vertically installed with much lower rate of efficiency loss, providing new surface areas to use for solar energy generation" img={maximize.src} />
        
        </div>
        <div style={smallerHoverCardContainerSx}>
        <HoverCard title="Cost of Install" detail=" SEDI PV Modules require no special structures or support to install. They can be installed by glueing, screwing or riveting onto existing structures. As they weight considerably less than conventional panels and are flexible, they are easier to transport, hoist onto roofs and  require less hazard work insurance as workmen don’t deal with glass panels. Also there is no need for grounding or earthing since no metal parts." img={money.src} />
        
        </div>
        <div style={smallerHoverCardContainerSx}>
        
        <HoverCard title="Degradation" detail="SEDI PV Modules face lower degradation rates due to surface of panel providing effective heat sink allowing dissipation of heat from the top rather than under as with conventional panels. Also no metal framing around the panel, and less heat build up reduces the PIDs effect in SEDI PV Modules. Lower degradation implies longer product (25yrs) and linear performance warranties (40 yrs)." img={chart.src} />
        </div>
        <div style={smallerHoverCardContainerSx}>
        <HoverCard title="Efficiency" detail="SEDI PV Modules use tier 1 monocrystalline silicon cells and accordingly their efficiency is comparable to conventional PV modules at nearly 20%" img={line.src} />
        </div>
      </Stack>
    </Stack>
  );
}

export default UniqueTech;
