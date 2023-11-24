import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import {
  Box,
  Typography,
  Fade,
  Container,
  Grid,
  Divider,
  Avatar,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import SpaIcon from '@mui/icons-material/Spa'
import wendy from '../assets/wendy.jpg'
import home from '../assets/home.png'
import yingyang from '../assets/yingyang.jpg'
import cheap from '../assets/cheap.jpg'
import thumbup from '../assets/thumbup.jpg'
const About = () => {
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
          textAlign: 'center',
          marginTop: '60px',
          marginBottom: '30px',
        }}
      >
        <Box sx={{ bgcolor: '#1a1a1a', mt: -1, pt: 1 }}>
          <img src={logo} alt="logo" />
          <Typography
            variant="h3"
            color="#ffffff"
            sx={{ fontFamily: 'Dancing script' }}
          >
            Health Lounge Papamoa
          </Typography>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'right',
              textAlign: 'left',
              width: { xs: '90vw', sm: '80vw', md: '50vw', xl: '30vw' },
              my: 4,
            }}
          >
            <Typography
              variant="h6"
              color="#ffffff"
              gutterBottom
              sx={{ fontSize: '1rem', mb: 4 }}
            >
              Welcome to Health Lounge Papamoa, where ancient wisdom meets
              modern wellness. Rooted in the principles of Huangdi Neijing and
              Chinese traditional treatments, the studio embodies a holistic
              approach to health. I believe in the profound connection between
              mind, body, and spirit, aligning our therapies with the timeless
              wisdom that promotes balance and harmony. From the flow of Qi to
              the principles of Yin and Yang, I guide you on a journey that
              transcends conventional beauty and massage, embracing the holistic
              essence of traditional Chinese medicine.
            </Typography>
          </Container>
        </Box>

        <Grid container sx={{ my: 5 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Typography variant="h4" gutterBottom>
                Meet Wendy
              </Typography>
              <img src={wendy} alt="owner" width="200px" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} textAlign="left">
            <Typography
              variant="h6"
              sx={{ fontSize: '1rem', mt: 2, mr: { xs: 2, md: 10 }, ml: 2 }}
            >
              Hello, I'm Wendy, the passionate owner and massage therapist at
              Health Lounge Papamoa. With over ten years of Chinese massage
              experience and eight years specializing in beauty treatments in
              NZ, I've dedicated five years to studying Huangdi Neijing. My
              approach integrates traditional Chinese medication and herbal teas
              into our rejuvenating treatments, garnering positive customer
              feedback for a truly holistic wellness experience. Join me on a
              journey of relaxation and vitality at Health Lounge Papamoa, where
              ancient traditions and modern care converge. Your well-being is my
              priority.
            </Typography>
          </Grid>
        </Grid>
        <Divider
          variant="fullwidth"
          textAlign="center"
          // sx={{ '&:before': { borderColor: "#fff" },
          // '&:after': { borderColor: "#fff" }}}
        >
          <SpaIcon
          // sx={{color:"#fff"}}
          />
        </Divider>
        <Box
          sx={{
            mx: { xs: 5, md: 20, lg: 50 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 10,

            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Avatar
            src={home}
            alt="setting"
            sx={{ height: '200px', width: '200px', mr: 10 }}
          />

          <Box
            textAlign="left"
            sx={{
              display: 'flex',
              alignItems: 'left',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              mt: { xs: 5, md: 0 },
            }}
          >
            <Typography variant="h1" sx={{ fontSize: '2rem' }}>
              Home Base Serenity
            </Typography>
            <Typography variant="h4" sx={{ fontSize: '1rem' }}>
              Where Tranquility Meets You
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mx: { xs: 5, md: 20, lg: 50 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 10,
            flexDirection: { xs: 'column-reverse', md: 'row' },
          }}
        >
          <Box
            textAlign="left"
            sx={{
              display: 'flex',
              alignItems: 'left',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              mt: { xs: 5, md: 0 },
            }}
          >
            <Typography variant="h1" sx={{ fontSize: '2rem' }} gutterBottom>
              Huangdi Neijing Harmony
            </Typography>
            <Typography variant="h4" sx={{ fontSize: '1rem' }}>
              Unveiling Wellness Through Ancient Wisdom and Healing Hands
            </Typography>
          </Box>{' '}
          <Avatar
            src={yingyang}
            alt="setting"
            sx={{ height: '200px', width: '200px', ml: 10 }}
          />
        </Box>

        <Box
          sx={{
            mx: { xs: 5, md: 20, lg: 50 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 10,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Avatar
            src={cheap}
            alt="setting"
            sx={{ height: '200px', width: '200px', mr: 10 }}
          />

          <Box
            textAlign="left"
            sx={{
              display: 'flex',
              alignItems: 'left',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              mt: { xs: 5, md: 0 },
            }}
          >
            <Typography variant="h1" sx={{ fontSize: '2rem' }}>
              Affordable Wellness
            </Typography>
            <Typography variant="h4" sx={{ fontSize: '1rem' }}>
              Because Your Health Matters
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mx: { xs: 5, md: 20, lg: 50 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 10,
            flexDirection: { xs: 'column-reverse', md: 'row' },
          }}
        >
          <Box
            textAlign="left"
            sx={{
              display: 'flex',
              alignItems: 'left',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              mt: { xs: 5, md: 0 },
            }}
          >
            <Typography variant="h1" sx={{ fontSize: '2rem' }}>
              Where Smiles Speak Louder
            </Typography>
            <Typography variant="h4" sx={{ fontSize: '1rem' }}>
              Wellness Redefined by Your Positive Experience.
            </Typography>
          </Box>
          <Avatar
            src={thumbup}
            alt="setting"
            sx={{ height: '200px', width: '200px', ml: 10 }}
          />
        </Box>
      </Box>
    </Fade>
  )
}

export default About
