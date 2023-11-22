import React,{useState} from 'react'
import { Outlet, Link } from "react-router-dom";
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
import { Link as MuiLink } from '@mui/material';
import logo from '../assets/logo.png'


const drawerWidth = 240;
const navItems = [
  {item:"Home",
link:"/"},
{item:"Services",
link:"/services"},
{item:"About",
link:"/about"},
{item:"Contact",
link:"/contact"}

];

const Layout = ({window}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',backgroundColor:"#000",height:"100%" }}>
      <Typography variant="subtitle1" color="text.secondary" sx={{ my: 2,fontFamily:"Dancing Script" }}>
        Health Lounge Papamoa
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
             <MuiLink component={Link} to={item.link}><ListItemText sx={{color:"text.secondary",fontFamily:"Montserrat"}} primary={item.item} /></MuiLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <> <Box sx={{ display: 'flex', }}>
    <CssBaseline />
    <AppBar component="nav" sx={{boxShadow:"none"}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{display: { xs: 'none', sm: 'block'}}}><img src={logo} alt='logo' width="40px" height="auto" /></Box>
        
           
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'},fontFamily:"Dancing Script",fontWeight:"400",letterSpacing:"2px",marginLeft:"20px" ,fontSize:{sm:"1.1rem",md:"1.5rem"}}}
        >
          Health Lounge Papamoa
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' },justifyContent:"right" }}>
          {navItems.map((item) => (
            <MuiLink to={item.link} component={Link}  underline="none"><Button key={item.item} sx={{ color: '#fff',fontSize:{sm:"0.7rem",md:"0.8rem",lg:"1rem"} }}>
              {item.item}
            </Button></MuiLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
    <nav>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
    </Box>  


      <Outlet />
      
    </>
  )
}

export default Layout
