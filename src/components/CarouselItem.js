import { Typography,Button,Box } from '@mui/material'
import React from 'react'

const CarouselItem = ({imageUrl,title,desc,buttonText,href}) => {
  return (
    <Box sx={{backgroundImage:`url(${imageUrl})`,
    backgroundSize:"cover", backgroundRepeat:"no-repeat",
    width:{xs:"auto",sm:"100%",},
    height:{xs:"70%",sm:"100%",lg:"100vh"},  
    
    
    }}>
        <Box sx={{backgroundColor:"rgba(0,0,0,0.7)",p:{xs:10,lg:30},display:"flex",
    
    flexDirection:"column",
    alignItems:"center",
    width:{xs:"auto",sm:"100%",},
    height:{xs:"70%",sm:"100%",lg:"100vh"},}}>
        <Typography variant='h1' color="#fff" gutterBottom sx={{fontSize:{xs:"2rem",sm:"3rem",md:"6rem",},backgroundImage:`url(${imageUrl})`,
    backgroundSize:"cover", backgroundRepeat:"no-repeat",backgroundClip:"text",WebkitBackgroundClip:"text"}}>{title}</Typography>
        <Box sx={{width:"50vw"}}>
        <Typography variant='h6' color="#ffffff" gutterBottom sx={{fontSize:{xs:".8rem",sm:"1rem",md:"1.2rem"}}}>{desc}</Typography></Box>
        <Button variant='contained' size='large' sx={{mt:10}} href={href}>{buttonText}</Button>      
    </Box>
    </Box>
    // <Grid container sx={{width:"100vw"}}>
    //     <Grid item xs={9}>
    //         <img src={imageUrl} alt={alt}/>
    //         </Grid>
    //         <Grid item xs={3}>
    //             <div>   
    //                     <Typography variant='h1'>{title}</Typography>
    //      <Typography variant='body1'>{desc}</Typography>
    //      <Button>{buttonText}</Button>  

    //             </div>
    //         </Grid>
        

    // </Grid>
  )
}

export default CarouselItem
