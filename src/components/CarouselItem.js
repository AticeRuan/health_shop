import { Typography, Button, Box } from '@mui/material'
import React from 'react'

const CarouselItem = ({
  imageUrl,
  title,
  desc,
  buttonText,
  href,

  id,
}) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id)
    console.log('id is', id)
    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: { xs: 'auto', sm: '100%' },
        height: { xs: '70%', sm: '100%', lg: '100vh' },
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          p: { xs: 10, lg: 30 },
          display: 'flex',

          flexDirection: 'column',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography
          variant="h1"
          color="#fff"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '6rem' },
            mt: 1,
            fontFamily: 'Archivo Black',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
          }}
        >
          {title}
        </Typography>
        <Box sx={{ width: '50vw' }}>
          <Typography
            variant="h6"
            color="#ffffff"
            gutterBottom
            sx={{ fontSize: { xs: '.8rem', sm: '1rem', md: '1.2rem' } }}
          >
            {desc}
          </Typography>
        </Box>
        <Button
          variant="contained"
          size={'large'}
          sx={{ mt: 10, fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' } }}
          href={href}
          onClick={() => handleScroll(id)}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  )
}

export default CarouselItem
