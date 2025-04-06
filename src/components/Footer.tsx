import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box component="footer" sx={{textAlign:"center",py:2,width:"100%"}}>
      <Typography variant='body2'>
        @{new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer