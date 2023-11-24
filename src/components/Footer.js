import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Box
      textAlign="center"
      sx={{
        bgcolor: '#1a1a1a',
        position: 'fixed',
        bottom: 0,
        width: '100vw',
        py: 2,
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: '#fff', fontSize: { xs: '0.8rem', md: '1rem' } }}
      >
        {`Copyright © Health Lounge Papamoa ${year}`}
      </Typography>
    </Box>
  )
}

export default Footer
