import React, { useState, useEffect } from 'react'
import { Container, useMediaQuery, Box, Fade, Tab } from '@mui/material'
import {
  massageItems,
  facialItems,
  waxingItems,
  eyebrowItems,
  manicureItems,
  traditionalItems,
} from '../components/utils'
import { Pricing, FoldedTab } from '../components/services/Pricing'
// import background from '../assets/service_barckground.jpg'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import CircularProgress from '@mui/material/CircularProgress'
const Service = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const [expanded, setExpanded] = useState(null)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null)
  }

  const [value, setValue] = useState('1')

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return loading ? (
    <Box sx={{ mt: 50, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <Fade in timeout={1000}>
        <Box
        // sx={{
        //   backgroundImage: `url(${background})`,
        //   backgroundSize: 'contained',
        //   // backgroundAttachment:"fixed",
        //   backgroundPosition: 'center center',
        //   backgroundRepeat: 'repeat-y',
        //   height: '100vh',
        // }}
        >
          <Box
            sx={{ backgroundColor: 'rgba(255,255,255,0.8)', height: '100%' }}
          >
            {isSmallScreen ? (
              <Container sx={{ pt: '100px', mb: 5 }}>
                <FoldedTab
                  serviceCategory="Massage"
                  serviceItems={massageItems}
                  isSmallScreen={isSmallScreen}
                  expanded={expanded === 'panel1'}
                  handleChange={handleChange('panel1')}
                  intro="Elevate your well-being with our refined massage services, inspired by the health preservation principles of 'Huangdi Neijing' and the timeless theories of traditional Chinese medicine found in 'Fen Han Lun' and 'Jin Gui Yao Lue.' We actively apply these principles, using massage techniques and strategic acupoint selection to stimulate reflexes to specific organs. Experience the positive effects as meridians are cleared, blood circulation is enhanced, internal balance is achieved, and work-related fatigue is alleviated. Whether you suffer from lower back pain, headaches, or shoulder discomfort, our massages offer effective relief, promoting a revitalized and balanced you."
                />
                <FoldedTab
                  serviceCategory="Facial"
                  serviceItems={facialItems}
                  isSmallScreen={isSmallScreen}
                  expanded={expanded === 'panel2'}
                  handleChange={handleChange('panel2')}
                  intro="Traditional Chinese medicine places significant importance on the connection between facial features and internal organ health. A facial treatment that incorporates acupoint stimulation, can trigger lymphatic drainage, improve circulation, and promote a radiant complexion in alignment with Huangdi Neijing's holistic principles. "
                />
                <FoldedTab
                  serviceCategory="Waxing"
                  serviceItems={waxingItems}
                  isSmallScreen={isSmallScreen}
                  expanded={expanded === 'panel3'}
                  handleChange={handleChange('panel3')}
                />
                <FoldedTab
                  serviceCategory="Eyebrows"
                  serviceItems={eyebrowItems}
                  isSmallScreen={isSmallScreen}
                  expanded={expanded === 'panel4'}
                  handleChange={handleChange('panel4')}
                />
                <FoldedTab
                  serviceCategory="Manicure & Pedicure"
                  serviceItems={manicureItems}
                  isSmallScreen={isSmallScreen}
                  expanded={expanded === 'panel5'}
                  handleChange={handleChange('panel5')}
                />
                <FoldedTab
                  serviceCategory="Chinese Essence Therapies"
                  serviceItems={traditionalItems}
                  isSmallScreen={isSmallScreen}
                  expanded={expanded === 'panel6'}
                  handleChange={handleChange('panel6')}
                  intro="Cupping, a traditional Chinese therapy, involves placing cups on the skin to create suction. This practice, when integrated into body treatments, can promote blood flow, alleviate muscle tension, and enhance the overall balance of Qi within the body.And Guasha is rooted in Huangdi Neijing's principles. This ancient Chinese technique involves gentle scraping to stimulate Qi flow, promoting vitality and balance. "
                />
              </Container>
            ) : (
              <Container sx={{ pt: '100px' }}>
                <TabContext value={value}>
                  <TabList onChange={handleTabChange} centered>
                    <Tab label="Massage" value="1" indicatorColor="secondary" />
                    <Tab label="Facial" value="2" />
                    <Tab label="Waxing" value="3" />
                    <Tab label="EyeBrows" value="4" />
                    <Tab label="Manicure & Pedicure" value="5" />
                    <Tab label="Chinese Essence Therapies" value="6" />
                  </TabList>
                  <TabPanel value="1" sx={{ m: 'auto' }}>
                    <Pricing
                      serviceCategory="Massage"
                      serviceItems={massageItems}
                      isSmallScreen={isSmallScreen}
                      intro="Consider a massage experience that goes beyond physical
                  relaxation, tapping into the energetic pathways
                  identified by Huangdi Neijing. By incorporating
                  acupressure or reflexology techniques, practitioners can
                  stimulate specific points along the meridians, promoting
                  the smooth flow of Qi and fostering balance within the
                  body"
                    />
                  </TabPanel>
                  <TabPanel value="2">
                    <Pricing
                      serviceCategory="Facial"
                      serviceItems={facialItems}
                      isSmallScreen={isSmallScreen}
                      intro="Traditional Chinese medicine places significant importance on the connection between facial features and internal organ health. A facial treatment that incorporates acupoint stimulation, can trigger lymphatic drainage, improve circulation, and promote a radiant complexion in alignment with Huangdi Neijing's holistic principles. "
                    />
                  </TabPanel>
                  <TabPanel value="3">
                    <Pricing
                      serviceCategory="Waxing"
                      serviceItems={waxingItems}
                      isSmallScreen={isSmallScreen}
                    />
                  </TabPanel>
                  <TabPanel value="4">
                    <Pricing
                      serviceCategory="Eyebrows"
                      serviceItems={eyebrowItems}
                      isSmallScreen={isSmallScreen}
                    />
                  </TabPanel>
                  <TabPanel value="5">
                    <Pricing
                      serviceCategory="Manicure & Pedicure"
                      serviceItems={manicureItems}
                      isSmallScreen={isSmallScreen}
                    />
                  </TabPanel>
                  <TabPanel value="6">
                    <Pricing
                      serviceCategory="Chinese Essence Therapies"
                      serviceItems={traditionalItems}
                      isSmallScreen={isSmallScreen}
                      intro="Cupping, a traditional Chinese therapy, involves placing cups on the skin to create suction. This practice, when integrated into body treatments, can promote blood flow, alleviate muscle tension, and enhance the overall balance of Qi within the body. And Guasha is rooted in Huangdi Neijing's principles. This ancient Chinese technique involves gentle scraping to stimulate Qi flow, promoting vitality and balance. "
                    />
                  </TabPanel>
                </TabContext>
              </Container>
            )}
          </Box>
        </Box>
      </Fade>
    </>
  )
}

export default Service
