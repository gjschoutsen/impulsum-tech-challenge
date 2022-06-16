import React from 'react'
import { Box, Button, Flex, Image, Text, IconArrowRight} from '@cmpsr/components'
import ComposerLogo from '../images/ComposerLogo.svg'

export default function NavBar() {
  return (
    
    <Box
      w='170%'
      h='124px'
      padding='32px 106px'
      >
      <Flex 
        alignItems='center'
        justify='space-around'
  
      >
        <Flex
          alignItems='center'
          
        >
          <Image 
          mr='spacer-4'
          src={ComposerLogo}></Image>
          <Text 
            variant='text-header-L'
            color='text-light'
          >
            Composer
          </Text>
        </Flex>
        <Button 
          size='m'
          variant='primary'
          borderRadius='99'
        >
          Request your free demo
          {<IconArrowRight/>} 
        </Button>
      </Flex>
    </Box>
  
  )
}
