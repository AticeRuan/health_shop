import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import tea from '../assets/herbs.png'
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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: { xs: 'column', md: 'row' },
        mx: 2,
      }}
    >
      <img src={tea} alt="tea" height="100vw"></img>
      <Typography variant="h1" sx={{ fontSize: { xs: '1.8rem', md: '2rem' } }}>
        Whoops! This page does not exist.
      </Typography>
    </Box>
  )
}

export default NotFound
