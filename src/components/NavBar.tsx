import React from 'react'
import "../css/NavBar.css"
import { Box, Button } from '@cmpsr/components';
import ComposerLogo from '../images/ComposerLogo.svg'

export default function NavBar() {
  return (
    <>
     <Box className='Box' w="100%" p={4} h="124px" >
      <img src={ComposerLogo} alt="Composer Logo" />
      <div>
      <Button variant= "primary" colorScheme='blue' size="m">Request your free demo</Button>
      </div>
     </Box>
    
    </>
  )
}
