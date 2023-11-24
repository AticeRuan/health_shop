import React from 'react'
import { Grid, Box, Typography, Divider, Fade } from '@mui/material'
import background from '../assets/contact_background.jpg'
import EnquiryForm from '../components/Form/EnquiryForm'
import SpaIcon from '@mui/icons-material/Spa'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'

const Contact = () => {
  return (
    <Fade in timeout={1000}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              backgroundImage: `url(${background})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: { sm: '100%', md: '100vh' },
              pb: 7,
            }}
          >
            <Grid container sx={{ px: 5, pt: 20 }}>
              <Grid item xs={12} sx={{ m: 5 }}>
                <Typography variant="h4" textAlign="center" color="#fff">
                  Contact Health Lounge
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Divider
                  variant="fullwidth"
                  textAlign="center"
                  sx={{
                    '&:before': { borderColor: '#fff' },
                    '&:after': { borderColor: '#fff' },
                  }}
                >
                  <SpaIcon sx={{ color: '#fff' }} />
                </Divider>
              </Grid>
              <Grid item xs={12} sx={{ mt: 5 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '60%',
                    margin: 'auto',
                  }}
                >
                  <Typography
                    variant="body1"
                    color="#fff"
                    sx={{ fontSize: '1rem' }}
                  >
                    Contact us for bookings, inquiries, or to discover the
                    wisdom of Huangdi Neijing and Chinese health concepts
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ mt: 5 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <LocationOnIcon sx={{ color: '#fff' }} />
                  <Typography variant="body1" textAlign="center" color="#fff">
                    40 Franks Way, Papamoa, Tauranga
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ m: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PhoneIcon sx={{ color: '#fff' }} />
                  <Typography variant="body1" textAlign="center" color="#fff">
                    +64 22 187 1285
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <EnquiryForm />
        </Grid>
      </Grid>
    </Fade>
  )
}

export default Contact
