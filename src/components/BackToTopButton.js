import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Tooltip } from '@mui/material'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY

    // Set visibility based on scroll position
    setIsVisible(scrollTop > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll)

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Tooltip title="Back to Top">
      <Fab
        //   color="#478c07"
        aria-label="back-to-top"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: isVisible ? 'block' : 'none',
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Tooltip>
  )
}

export default BackToTopButton
