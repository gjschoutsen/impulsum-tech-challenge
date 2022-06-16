import React from 'react'
import { Text, Box, Flex, Image } from '@cmpsr/components';
import ComposerLogo from '../images/ComposerLogo.svg'

export default function Footer() {
  return (
    <Box
    w='80%'
    h='152px'
    >
      <Flex
        justify='space-between'
        alignItems='center'
      >
      <Flex
      >  
      <Text
        variant='text-body-meta-regular'
        color='text-secondary'
      >© 2022 Composer. Proudly powered by  
      </Text>
      <Text
        variant='text-body-meta-regular'
        color='primary-default'
        >
        Impulsum Venture Colab. 
      </Text>
      <Text
        variant='text-body-meta-regular'
        color='text-secondary'
      >
      All Rights Reserved. 
      </Text>
      <Text
        variant='text-body-meta-regular'
        color='primary-default'
        > 
        Privacy Policy
      </Text>

       </Flex>
       <Image
        src={ComposerLogo}
       ></Image>
      </Flex>
    </Box>
  )
}
