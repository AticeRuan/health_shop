import React from 'react'
import Carousel from 'react-material-ui-carousel';
// import { Container, useMediaQuery } from '@mui/material';
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import CarouselItem from '../components/CarouselItem';
const items=[
  {
    imgUrl: hero1,
    alt: 'massage',
    title:'Reflexology',
    desc:'Revitalize Your Sole, Unwind Your Whole: Reflexology Full Body Massage, Where Relaxation Meets Rejuvenation',
    buttonText:'Enquiry NOW'
  },
  {
    imgUrl: hero2,
    alt: 'traditional remedy',
    title:'Huangdi Neijing spirituality',
    desc:'Inner Canon of the Yellow Emperor: Embracing the Wisdom of Huangdi Neijing',
    buttonText:'Learn More'
  },
  {
    imgUrl: hero3,
    alt: 'traditional remedy',
    title:'Herbal remeday',
    desc:'Natural Cure, Rooted in Tradition: Harnessing Wellness with Chinese Herbal Harmony',
    buttonText:'Learn More'
  },
  {
    imgUrl: hero4,
    alt: 'meniicure',
    title:'Menicure and Pedicure',
    desc:'Pamper Your Hands and Feet: Precision Care, Immaculate Style.',
    buttonText:'Enquiry NOW'
  },
  {
    imgUrl: hero5,
    alt: 'facial',
    title:'Facial Relaxation',
    desc:'Revitalize Your Radiance: Unveil the Beauty Within.',
    buttonText:'Enquiry NOW'
  },
  {
    imgUrl: hero6,
    alt: 'massage',
    title:'More services avaiable',
    desc:'Targeted massage,precision waxing solutions,precision brow sculpting and tinting and more...',
    buttonText:'See Details',
    href:'/services'
    
  }

]



const Home = () => {
  // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  return (
   
     
    <Carousel
           
      animation="fade"
      navButtonsAlwaysinVisible      
      indicators={false}
      sx={{ textAlign: 'center', marginTop: '50px',width:"100%",height:"100vh" }}
      interval={3000}      
      
    >  
      {items.map((item, index) => (
        <CarouselItem
          key={index}
          imageUrl={item.imgUrl}
          title={item.title}
          desc={item.desc}
          buttonText={item.buttonText}
          href={item.href}
          // width={isSmallScreen ? '100%' : '70%'}
          
        />
      ))}
    </Carousel>
  )
}

export default Home
