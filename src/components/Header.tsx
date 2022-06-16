import React from 'react'
import { Box, Text, Flex, Button, IconArrowRight } from '@cmpsr/components';

export default function Header() {
  return (
    <Box
      w='100%'
      h='620px'
      padding='132px 106px'
    >
      <Flex
        direction='column'
        justify='center'
        alignItems='center'
        gap='32px'
      >
        <Text
          align='center'
          variant='text-header-4XL'
          color='text-light'          
          >
            Deploy modern web experiences 
            with the smartest web builder
        </Text>
        <Text
     
          variant='text-body-display-S'
          fontFamily='Inter'
          align='center'
          color='text-secondary'
        >
            Introducing Composer - the most advanced web and landing page builder for non-programmers
            that helps you to speed up your digital production processes
            Request your free demo
        </Text>
        <Button 
          size='l'
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
