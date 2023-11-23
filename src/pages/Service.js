import React, {useState} from 'react';
import { Container, useMediaQuery,Box,Fade,Tab } from '@mui/material';
import { massageItems, facialItems, waxingItems, eyebrowItems, manicureItems } from '../components/utils';
import { Pricing, FoldedTab } from '../components/services/Pricing';  
import background from "../assets/service_barckground.jpg"
import { TabContext,TabList,TabPanel } from '@mui/lab';
const Service = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState(null);
  
  const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : null);
    };

    const [value, setValue] = useState('1');

    const handleTabChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
    <Fade in timeout={1000}>
    <Box sx={{backgroundImage:`url(${background})`,
    backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundAttachment:"fixed",
    width:"100%",
    height:"100%",}}>
      <Box sx={{backgroundColor:"rgba(255,255,255,0.8)",height:"100vh"}}>
      {isSmallScreen ? (
        <Container sx={{ pt: "100px" }}>
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
          <FoldedTab serviceCategory="Manicure & Pedicure" serviceItems={manicureItems} isSmallScreen={isSmallScreen} 
          expanded={expanded==="panel5"} handleChange={handleChange("panel5")}/>
        </Container>
      ) : (
        <Container sx={{ pt: "100px"}} >
          <TabContext value={value}>
            <TabList onChange={handleTabChange} centered>
            <Tab label="Massage" value="1" indicatorColor="secondary"/>
            <Tab label="Facial" value="2" />
            <Tab label="Waxing" value="3" />
            <Tab label="EyeBrows" value="4" />
            <Tab label="Manicure & Pedicure" value="5" />
            </TabList>
            <TabPanel value='1' sx={{m:"auto"}}><Pricing serviceCategory="Massage" serviceItems={massageItems} isSmallScreen={isSmallScreen} /></TabPanel>
            <TabPanel value='2'><Pricing serviceCategory="Facial" serviceItems={facialItems} isSmallScreen={isSmallScreen} /></TabPanel>
            <TabPanel value='3'><Pricing serviceCategory="Waxing" serviceItems={waxingItems} isSmallScreen={isSmallScreen} /></TabPanel>
            <TabPanel value='4'><Pricing serviceCategory="Eyebrows" serviceItems={eyebrowItems} isSmallScreen={isSmallScreen} /></TabPanel>
            <TabPanel value='5'><Pricing serviceCategory="Manicure & Pedicure" serviceItems={manicureItems} isSmallScreen={isSmallScreen} /></TabPanel>
          
          
          
          
          
          </TabContext>
        </Container>
      )}
      </Box>
      </Box>
      </Fade>
    </>
  );
};

export default Service;
