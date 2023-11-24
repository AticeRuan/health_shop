import React, { useState, useEffect } from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../components/CarouselItem'
import { carouselItems } from '../components/utils'
import {
  Typography,
  Container,
  Divider,
  Box,
  Grid,
  Avatar,
} from '@mui/material'
import block1 from '../assets/service_barckground.jpg'
import block2 from '../assets/herbal.jpg'
import SpaIcon from '@mui/icons-material/Spa'

import BackToTopButton from '../components/BackToTopButton'
import CircularProgress from '@mui/material/CircularProgress'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

  return loading ? (
    <Box sx={{ mt: 50, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <BackToTopButton />

      <Carousel
        animation="fade"
        navButtonsAlwaysinVisible
        indicators={true}
        sx={{
          textAlign: 'center',
          marginTop: '50px',
          width: '100%',
          height: { xs: '100%', lg: '70vh' },
        }}
        interval={3000}
      >
        {carouselItems.map((item, index) => (
          <CarouselItem
            key={index}
            imageUrl={item.imgUrl}
            title={item.title}
            desc={item.desc}
            buttonText={item.buttonText}
            href={item.href}
            id={item.id}
            link={item.link}
          />
        ))}
      </Carousel>

      <Container sx={{ width: { xs: '80vw', md: '50vw' }, mt: 5 }}>
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
        <Typography variant="h6">
          Health Lounge Papamoa, where ancient Chinese traditions meet modern
          relaxation. Designed with the comfort of a home base in mind and
          nspired by the timeless wisdom of Huangdi Neijing, our services embody
          the spirit of traditional Chinese medicine, offering a unique blend of
          holistic wellness and soothing serenity.
        </Typography>
      </Container>
      <Divider
        id="block1"
        variant="fullwidth"
        sx={{
          borderColor: '#f7d36f',
          mt: 5,
          borderStyle: 'dashed',
          borderWidth: '1px',
        }}
      />
      {/* Article Block 1 */}
      <Box
        sx={{
          height: { xs: 'auto', md: '100vh' },
          // mx: { sm: 1, md: 4 },
          pt: 10,
          px: { xl: 30 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: { xs: 'center' },
          backgroundColor: '#f7d36f',
        }}
      >
        <Typography
          gutterBottom
          variant="h1"
          sx={{ fontSize: { xs: '3rem', md: '5rem' } }}
        >
          Huangdi Neijing
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, mx: 2 }}
        >
          「 Harmony Unveiled: Nourishing Wellness Through the Wisdom of Huangdi
          Neijing 」
        </Typography>
        <Grid container sx={{ pt: 5, alignItems: 'center', p: 2 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                Huangdi Neijing, also known as the Yellow Emperor's Inner Canon,
                stands as a cornerstone in traditional Chinese medicine,
                offering profound insights into the intricate balance between
                the mind, body, and spirit. This ancient text, believed to have
                originated more than two millennia ago, embodies the holistic
                principles of Chinese medicine, providing a roadmap to optimal
                health and well-being.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Avatar
                src={block1}
                alt="huangdineijing"
                sx={{
                  height: { xs: '300px', md: '450px' },
                  width: { xs: '300px', md: '450px' },
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            alignItems: 'center',

            py: 10,
            px: 2,
          }}
        >
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4 }}>
              <Typography variant="h3" sx={{ fontFamily: 'Caveat' }}>
                “Harmony within oneself breeds vitality”
              </Typography>
              <Typography variant="h6" align="right">
                – Huangdi Neijing”
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 5,
              }}
            >
              <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                At its core, Huangdi Neijing espouses the concept of balance,
                emphasizing the harmony between opposing forces – the
                fundamental principles of Yin and Yang. It outlines the flow of
                vital energy, or Qi, through meridians within the body, and the
                significance of maintaining equilibrium for a healthy life. This
                ancient wisdom extends beyond the realm of physical health,
                delving into the intricate connection between our emotional
                states and overall wellness.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider
        id="block2"
        variant="fullwidth"
        sx={{
          borderColor: '#f7d36f',
          borderStyle: 'dashed',
          borderWidth: '1px',
        }}
      />
      {/* Article Block 2 */}

      <Box
        sx={{
          height: { xs: 'auto', md: '100vh' },
          // mx: { sm: 1, md: 4 },
          pt: 10,

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: { xs: 'center' },
        }}
      >
        <Typography
          gutterBottom
          variant="h1"
          sx={{ fontSize: { xs: '3rem', md: '5rem' } }}
        >
          Herbal Remedy
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontSize: { xs: '1rem', sm: '1.5rem' }, mx: 2 }}
        >
          「 Nature's Elixir, Your Wellness Symphony: Chinese Herbal Remedy. 」
        </Typography>
        <Grid container sx={{ pt: 5, alignItems: 'center', px: 2 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pb: 4,
                // ml: { sm: 6, md: 4 },
              }}
            >
              <Avatar
                src={block2}
                alt="herbal tea"
                sx={{
                  height: { xs: '300px', md: '450px' },
                  width: { xs: '300px', md: '450px' },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 4, pr: { xl: 20 } }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
                Embark on a journey of herbal indulgence with our homemade
                Chinese herbal teas, meticulously crafted to elevate your
                well-being. Sip the warmth of traditional remedies as you
                explore the delicate balance of flavors and health benefits. Our
                blend of Chinese dates, revered for their nourishing properties,
                dances with the spiciness of ginger, creating a harmonious
                infusion that aids digestion and fortifies the immune system.
                Embrace the floral notes of tiger lily, celebrated for promoting
                respiratory health. Each blend serves a distinct purpose –
                whether it's the soothing embrace of chamomile for relaxation or
                the invigorating kick of ginseng for an energy boost. Discover
                the art of healing in every cup, where ancient wisdom meets
                modern comfort, creating a sanctuary of health and flavor in
                your daily ritual.
              </Typography>
              <Typography variant="h6" sx={{ fontSize: '1rem' }}>
                Each blend serves a distinct purpose – whether it's the soothing
                embrace of chamomile for relaxation or the invigorating kick of
                ginseng for an energy boost. Discover the art of healing in
                every cup, where ancient wisdom meets modern comfort, creating a
                sanctuary of health and flavor in your daily ritual.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            alignItems: 'center',
            backgroundColor: '#879c75',
            py: 10,
            px: { lg: 10, xl: 50 },
          }}
        >
          <Grid item xs={12}>
            <Box sx={{ p: { xs: 6, lg: 10, xl: 15 } }}>
              <Typography variant="h4" sx={{ fontFamily: 'Caveat' }}>
                “The five organs respond to the four seasons, a hundred diseases
                compete to manifest; all of this is in accordance with the
                balance, desiring to allow them to follow their natural course.”
              </Typography>
              <Typography variant="h6" align="right">
                – Huangdi Neijing”
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home
