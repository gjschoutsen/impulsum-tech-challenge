import React from 'react'
import { Box, Button, Flex, Image, Text } from '@cmpsr/components'
import ComposerLogo from '../images/ComposerLogo.svg'

export default function NavBar() {
  return (
    
    <Box id='navbar'
      maxH='124px'
      >
      <Flex 
        alignItems='center'
      >
        <Flex
          alignItems='center'
        >
          <Image src={ComposerLogo}></Image>
          <Text 
            color='accent-default'
          >
            Composer
          </Text>
        </Flex>
        <Button 
          variant='primary'
          size='m'
          borderRadius='99'
        >
          Request your free demo
        </Button>
      </Flex>
    </Box>
  
  )
}
