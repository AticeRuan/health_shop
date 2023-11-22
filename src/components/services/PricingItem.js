import { Typography, Grid, useMediaQuery,Container, Box, Divider } from '@mui/material';

const PricingItem = ({ serviceName, duration, price }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      {isSmallScreen ? (
        <Container sx={{m:2}}>
            
            <Typography variant='h6'>
            {serviceName}
            </Typography><Box sx={{display:"flex",justifyContent:"center"}}>
            <Typography variant='subtitle1' >
            {duration}
            </Typography>
            <Typography variant='subtitle1' sx={{ml:10}}>
            ${price}
            </Typography></Box>
            </Container>
        
      ) : (
        <Grid container sx={{m:2}}>
          <Grid item xs={6}>
          <Typography variant='h6' gutterBottom>
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
          <Divider/>
        </Grid>
        
      )}
    </>
  );
};

export default PricingItem;
