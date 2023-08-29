import { Box, Card, CardContent, CardMedia, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import HoverCard from './HoverCard';
import story from "../../../public/assets/story.png";
import concept from "../../../public/assets/concept.png";
import technology from "../../../public/assets/technology.png";
import "./sediHover.css"
type Props = {};

const SediHoverCard = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  
  const componentRef = useRef<HTMLDivElement | null>(null);

  // Function to check if the component is in the viewport
  const isComponentVisible = () => {
    if (componentRef.current) {
      const top = componentRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      return top < windowHeight;
    }
    return false;
  };

  // Function to handle the scroll event
  const handleScroll = () => {
    const visible = isComponentVisible();
    setIsVisible(visible);
  };

  // Attach event listeners when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility when the component mounts

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const storydetail =
    " SEDI had its beginnings in Germany in early 2009 as a Company specializing in unique security and fire safety solutions, with emphasis on renewable energy solutions to power them. Since those early days, the interest in our bespoke and unique Solar and Wind solutions such as Jacket and Tower grew and SEDI Solar was born as an independent company to focus on providing high quality and unique solar solutions, especially in projects and scenarios where the heavy glass top conventional Solar systems fail.";
  const conceptdetail =
    'Providing SOLAR on the MOVE. Rapidly deployable solar solutions in the rural regions, and areas where conventional solar would be either impossible, or too expensive or take too much time to install and deploy. Solar deployments for military, disaster relief, field medical centers, event management sectos and telecom sector where rapid mobility is essential. SEDI Solar designed to provide very reliable energy with very low on-site maintenance';
  const technologydetail =
    'Using unique fiber composites that allow the manufacture of Mono-crystalline PV Modules at a fraction of the weight of conventional ones, providing comparable power, longer life warranty, much higher durability and ruggedness and made to be ultra-thin and quite flexible. Our PV Modules use the same Tier 1 Mono-crystalline Silicon wafers as other top notch conventional PV Module manufacturers, hence performance is similar but no one can compare with us in situations and locations where conventional ones could not be installed.';

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction="column"
      paddingTop={5}
      paddingBottom={5}
      spacing={5}
      minHeight={isSmallScreen ? '100vh' : 'auto'}
      className="sedi-hover-card-container"
    >
      <Stack>
        <div>
          <p className="meet-sedi" style={{fontFamily: 'Conthrax Sb'}}>MEET SEDI</p>
        </div>
        <p className="font-medium text-center pt-2">
          We all need to do our part to make the world a better place for our children!
        </p>
      </Stack>
      <Stack
        direction={{ md: 'row', sm: 'column', xs: 'column' }}
        justifyContent="space-around"
        spacing={3}
        className="hover-card-secttion"
      >
        <HoverCard title="Our Story" detail={storydetail} img={story.src} />
        <HoverCard title="Our Concept" detail={conceptdetail} img={concept.src} />
        <HoverCard title="Our Technology" detail={technologydetail} img={technology.src} />
      </Stack>
    </Stack>
  );
};

export default SediHoverCard;
