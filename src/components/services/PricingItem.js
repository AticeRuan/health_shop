import { Typography, Grid, useMediaQuery,Container, Box, Divider } from '@mui/material';

const PricingItem = ({ serviceName, duration, price }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      {isSmallScreen ? (
        <Container sx={{m:2}}>
            
            <Typography variant='h6' color="secondary" sx={{fontSize:'1.1rem'}}>
            {serviceName}
            </Typography>
            <Box sx={{display:"flex",justifyContent:"left", mt:1}}>
            <Typography variant='body2' >
            {duration}
            </Typography>
            <Typography variant='body2' sx={{ml:10}}>
            ${price}
            </Typography>
            </Box>
            <Divider light variant='middle' sx={{mt:1,borderStyle:"dotted"}}/>
            </Container>
        
      ) : (
        <Grid container sx={{m:2}}>
          <Grid item xs={6}>
          <Typography variant='h6' gutterBottom color="secondary" >
            {serviceName}
            </Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant='subtitle1' >
            {duration}
            </Typography>
          </Grid>
          <Grid item xs={3}>
          <Typography variant='subtitle1' sx={{ml:10}}>
            ${price}
            </Typography>
          </Grid>
          <Grid item xs={10}>
          <Divider variant="fullwidth" sx={{borderStyle:"dashed"}}/></Grid>
        </Grid>
        
      )}
    </>
  );
};

export default PricingItem;
