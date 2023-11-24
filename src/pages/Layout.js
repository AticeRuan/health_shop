import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as MuiLink } from '@mui/material'
import logo from '../assets/logo.png'
import { navItems } from '../components/utils'
import Footer from '../components/Footer'

const drawerWidth = 240

const Layout = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: '#000',
        height: '100%',
        pt: 2,
      }}
    >
      <img src={logo} alt="logo" width="40px" height="auto" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <MuiLink component={Link} to={item.link}>
                <ListItemText
                  sx={{ color: 'text.secondary' }}
                  primary={item.item}
                ></ListItemText>
              </MuiLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <>
      {' '}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ boxShadow: 'none', py: { xs: 1, sm: 0 } }}
        >
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
            <Button href="/" sx={{ display: { xs: 'none', sm: 'block' } }}>
              <img src={logo} alt="logo" width="40px" height="auto" />
            </Button>
            <Box
              sx={{
                flexGrow: 1,
                marginLeft: '20px',
              }}
            >
              <Typography
                variant="h1"
                component="div"
                sx={{
                  // flexGrow: 1,
                  // fontFamily: 'Dancing Script',
                  fontWeight: '400',
                  letterSpacing: '2px',

                  fontSize: { xs: '1.4rem', sm: '1rem', md: '1.5rem' },
                }}
              >
                Health Lounge Papamoa
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: '0.8rem', sm: '0.8rem', md: '0.7rem' } }}
              >
                Affordable Wellness
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                justifyContent: 'right',
              }}
            >
              {navItems.map((item) => (
                <MuiLink
                  key={item.item}
                  to={item.link}
                  component={Link}
                  underline="none"
                >
                  <Button
                    key={item.item}
                    sx={{
                      color: '#fff',
                      fontSize: {
                        sm: '0.7rem',
                        md: '0.8rem',
                        lg: '0.8rem',
                        xl: '0.9rem',
                      },
                    }}
                  >
                    {item.item}
                  </Button>
                </MuiLink>
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
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
