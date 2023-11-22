import React from 'react'

import { Box, Typography,Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import PricingItem from './PricingItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Pricing = ({serviceCategory,serviceItems,isSmallScreen=false}) => {
  return (
    <>
    
      <Box >
        {!isSmallScreen&&<Typography variant="h4">{serviceCategory}</Typography>}
        
        {serviceItems.map((item) => (
          <PricingItem key={item.serviceName} serviceName={item.serviceName} duration={item.serviceDuration} price={item.servicePrice} />
        ))}
      </Box>
    
  </>
  
      
    
  )
}
export const FoldedTab = ({handleChange,expanded,serviceCategory, serviceItems, isSmallScreen = false }) => {

    return (
      <>
        <Accordion
        onChange={handleChange}
          expanded={expanded}
          sx={{ mb: 5, borderBottom: 'none', '&:before': { backgroundColor: "transparent" } }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${serviceCategory}-content`} sx={{ borderBottom: "none!important" }}>
            <Typography variant='h5'>{serviceCategory}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ borderBottom: "none!important" }}>
            <Pricing serviceCategory={serviceCategory} serviceItems={serviceItems} isSmallScreen={isSmallScreen} />
          </AccordionDetails>
        </Accordion>
      </>
    );
  };
  
  



