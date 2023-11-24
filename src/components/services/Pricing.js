import React from 'react'

import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import PricingItem from './PricingItem'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
export const Pricing = ({
  serviceCategory,
  serviceItems,
  isSmallScreen = false,
  intro,
}) => {
  return (
    <>
      <Box>
        {!isSmallScreen && (
          <Typography variant="h4" sx={{ mt: 5 }}>
            {serviceCategory}
          </Typography>
        )}

        <Typography variant="h6" sx={{ fontSize: '1rem', my: 3 }}>
          {' '}
          {intro}
        </Typography>

        {serviceItems.map((item) => (
          <PricingItem
            key={item.serviceName}
            serviceName={item.serviceName}
            duration={item.serviceDuration}
            price={item.servicePrice}
          />
        ))}
      </Box>
    </>
  )
}
export const FoldedTab = ({
  handleChange,
  expanded,
  serviceCategory,
  serviceItems,
  isSmallScreen = false,
  intro,
}) => {
  return (
    <>
      <Accordion
        onChange={handleChange}
        expanded={expanded}
        sx={{
          mb: 5,
          borderBottom: 'none',
          '&:before': { backgroundColor: 'transparent' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls={`${serviceCategory}-content`}
          sx={{ borderBottom: 'none!important' }}
        >
          <Typography variant="h6" color="text.secondary">
            {serviceCategory}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderBottom: 'none!important' }}>
          <Pricing
            serviceCategory={serviceCategory}
            serviceItems={serviceItems}
            isSmallScreen={isSmallScreen}
            intro={intro}
          />
        </AccordionDetails>
      </Accordion>
    </>
  )
}
