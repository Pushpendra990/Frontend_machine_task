import { Box, styled, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <FooterStyle>
    <Typography variant="body2">&copy; 2023 Employee Management. All rights reserved.</Typography>
  </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled(Box)({
    backgroundColor: '#334155', marginTop: '16px', padding: '16px', textAlign: 'center' 
})