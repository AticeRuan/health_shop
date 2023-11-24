import React, { useState, useEffect } from 'react'
import { Box, Typography, Fade } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import tea from '../assets/herbs.png'
// import zen from '../assets/zen.jpg'
const NotFound = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return loading ? (
    <Box sx={{ mt: 50, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  ) : (
    <Fade in timeout={2000}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          // width: '100vw',
          flexDirection: { xs: 'column', md: 'row' },
          mx: 2,
          // backgroundImage: `url(${zen})`,
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat',
          // p: 0,
        }}
      >
        <Box
          sx={{
            borderWidth: '1px',
            borderColor: '#000',
            p: 5,
            bgcolor: '#fff',
          }}
        >
          <img src={tea} alt="tea" height="100vw"></img>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '1.8rem', md: '2rem' } }}
          >
            Whoops! This page does not exist.
          </Typography>
        </Box>
      </Box>
    </Fade>
  )
}

export default NotFound
