import React, {useState} from 'react';
import { Container, useMediaQuery } from '@mui/material';
import { massageItems, facialItems, waxingItems, eyebrowItems, manicureItems } from '../components/utils';
import { Pricing, FoldedTab } from '../components/services/Pricing';  

const Service = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(null);
  
  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : null);
    };
  return (
    <>
      {isSmallScreen ? (
        <Container sx={{ mt: "100px" }}>
          <FoldedTab 
          serviceCategory="Massage" 
          serviceItems={massageItems} 
          isSmallScreen={isSmallScreen} 
          expanded={expanded==="panel1"} 
          handleChange={handleChange("panel1")}/>
          <FoldedTab serviceCategory="Facial" serviceItems={facialItems} isSmallScreen={isSmallScreen} 
          expanded={expanded==="panel2"} handleChange={handleChange("panel2")}/>
          <FoldedTab serviceCategory="Waxing" serviceItems={waxingItems} isSmallScreen={isSmallScreen} 
          expanded={expanded==="panel3"} handleChange={handleChange("panel3")} />
          <FoldedTab serviceCategory="Eyebrows" serviceItems={eyebrowItems} isSmallScreen={isSmallScreen}
          expanded={expanded==="panel4"} handleChange={handleChange("panel4")}/>
          <FoldedTab serviceCategory="Manicure&Pedicure" serviceItems={manicureItems} isSmallScreen={isSmallScreen} 
          expanded={expanded==="panel5"} handleChange={handleChange("panel5")}/>
        </Container>
      ) : (
        <Container sx={{ mt: "100px" }}>
          <Pricing serviceCategory="Massage" serviceItems={massageItems} isSmallScreen={isSmallScreen} />
          <Pricing serviceCategory="Facial" serviceItems={facialItems} isSmallScreen={isSmallScreen} />
          <Pricing serviceCategory="Waxing" serviceItems={waxingItems} isSmallScreen={isSmallScreen} />
          <Pricing serviceCategory="Eyebrows" serviceItems={eyebrowItems} isSmallScreen={isSmallScreen} />
          <Pricing serviceCategory="Manicure&Pedicure" serviceItems={manicureItems} isSmallScreen={isSmallScreen} />
        </Container>
      )}
    </>
  );
};

export default Service;
