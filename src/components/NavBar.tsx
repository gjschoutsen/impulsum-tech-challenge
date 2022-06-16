import React from 'react'
import '../css/NavBar.css'
// import { Button } from '@cmpsr/components';
import {Box, Button} from '@chakra-ui/react'
import ComposerLogo from '../images/ComposerLogo.svg'

export default function NavBar() {
  return (
    <>
     <Box className='box' w='100%' h='124px' >
      <div className='logo-box'>
      <img src={ComposerLogo} alt="Composer Logo" />
      <h1 className='brand-name'>Composer</h1>
      </div>
      <div>
        <Button 
          roundedRight='99' 
          roundedLeft='99' 
          colorScheme="blue"
          >Request your free demo
        </Button>
      </div>
     </Box>
    
    </>
  )
}
