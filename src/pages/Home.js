import React from 'react'
import Carousel from 'react-material-ui-carousel';
// import { Container, useMediaQuery } from '@mui/material';
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";

const images=[
  {
    imgUrl: hero1,
    alt: 'massage',
  },
  {
    imgUrl: hero2,
    alt: 'traditional remedy',
  },
  {
    imgUrl: hero3,
    alt: 'traditional remedy',
  },
  {
    imgUrl: hero4,
    alt: 'medicure',
  },
  {
    imgUrl: hero5,
    alt: 'facial',
  },
  {
    imgUrl: hero6,
    alt: 'massage',
  }

]

const Home = () => {
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
   
     
    <Carousel
           
      animation="fade"
      navButtonsAlwaysinVisible      
      indicators={false}
      sx={{ textAlign: 'center', marginTop: '20px' }}
      interval={5000}
    >
      {images.map((item, index) => (
        <img
          key={index}
          src={item.imgUrl}
          alt={item.alt}
          // width={isSmallScreen ? '100%' : '70%'}
          width="100%"
          height="vh"
        />
      ))}
    </Carousel>
  )
}

export default Home
