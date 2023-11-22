import React from 'react'
import Carousel from 'react-material-ui-carousel';


import CarouselItem from '../components/CarouselItem';
import {carouselItems} from '../components/utils'




const Home = () => {

  return (
   
     
    <Carousel
           
      animation="fade"
      navButtonsAlwaysinVisible      
      indicators={false}
      sx={{ textAlign: 'center', marginTop: '50px',width:"100%",height:"100vh" }}
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
          // width={isSmallScreen ? '100%' : '70%'}
          
        />
      ))}
    </Carousel>
  )
}

export default Home
