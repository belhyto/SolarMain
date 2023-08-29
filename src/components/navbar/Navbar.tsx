"use client"
import React, { MouseEvent, useState } from 'react'
import "./navbar.css"
import Image from 'next/image'
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Stack } from '@mui/material'
import logo from "../../../public/assets/logo.png"
import logo2 from "../../../public/assets/logo2.png"
import localFont from "next/font/local";
// import "../../../public/assets/fonts/"
type Props = {}
const myFont = localFont({src:"../../../public/assets/fonts/conthrax-sb.otf"})
const drawerWidth = 240;
const navItems = ['Technology', 'Products', 'References'];
const Navbar = (props: Props) => {
  const [highlightStyle, setHighlightStyle] = useState({
    opacity: 0,
    transform: 'translateX(0)',
    width: '100px'
  });
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' ,background:"#DAE0EE",color:"#202542"}}>
        <Box>
            <IconButton >
                <CloseIcon sx={{color:"#202542"}} />
            </IconButton>
        </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={`/${item.toLocaleLowerCase()}`}>
                {item}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const handleMouseLeave = (e: MouseEvent<HTMLLIElement>,item:string)=>{
    const listItemIndex = navItems.indexOf(item);
    const highlightWidth =  `${e.currentTarget.clientWidth -20}px` ;
    const highlightTransform = `translateX(${listItemIndex === 0? "-5":listItemIndex === 1?"92":"205"}px)`;
    setHighlightStyle({
      opacity: 1,
      transform: highlightTransform,
      width: "0px",
    });
    
  }
  const handleMouseOver = (e: MouseEvent<HTMLLIElement>,item:string)=>{
    const listItemIndex = navItems.indexOf(item);
    const highlightWidth =  `${e.currentTarget.clientWidth -20}px` ;
    const highlightTransform = `translateX(${listItemIndex === 0? "2":listItemIndex === 1?"96":"205"}px)`;
    setHighlightStyle({
      opacity: 1,
      transform: highlightTransform,
      width: highlightWidth
    });
  }
  return (
    <div className="n-wrapper">
        <AppBar component="nav" sx={{
            "&.MuiAppBar-root":{
                background: "rgba(218, 224, 238, 0.65)",
            },
            background:{xs:"#202542"},color:{sm:"#202542"}
        }}>
        <Toolbar sx={{ display:"flex",justifyContent:"space-between" }}>
          <Box
            sx={{ flexGrow: 0.7, display: 'block' }}
          >
            <div className="n-logo px-2 flex">
                <Link href={"/"} className='flex'>
                  <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} gap={2}>
                    <Image src={logo.src} alt='sedi-solar logo' height={250}
  width={200} />
                                        
                  </Stack>
                </Link>
            </div>
          </Box>
          <Box className="nav-link-wrapper" sx={{ display: { xs:"none",sm: 'none', md: 'flex' } }}>
            <div className='menu-highlight' style={highlightStyle}></div>
            {navItems.map((item) => (
                    <Link key={item} href={`/${item.toLocaleLowerCase()}`}>
                <ListItem className="nav-links"  onMouseEnter={(e)=>handleMouseOver(e,item)} onMouseLeave={(e)=>handleMouseLeave(e,item)}>
                        {item}
                </ListItem>
                    </Link>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor='right'
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { sm: 'block', md: 'none' },
            
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background:"#202542", },
            '& .nav-links': { color: '#202542' }, 
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </div>
  )
}

export default Navbar