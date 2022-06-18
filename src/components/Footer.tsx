import React from 'react'
import { Text, Box, Flex, Image } from '@cmpsr/components';
import ComposerLogo from '../images/ComposerLogo.svg'

export default function Footer() {
  return (
    <Box
    w={['100%','80%']}
    padding={['40px 0px', '0']}
    >
      <Flex id='10000'
        direction={['column', 'row']}
        justify='space-between'
        alignItems='center'
        gap={['20px', '0']}
        >
        <Flex
          direction={['column', 'row']}
          align={['center', 'left']}
        >  
        <Text
          as='span'
          variant='text-body-meta-regular'
          color='text-secondary'
          >© 2022 Composer. Proudly powered by   
        </Text>
        <Text
          as='span'
          variant='text-body-meta-regular'
          color='primary-default'
          >
          Impulsum Venture Colab. 
        </Text>
        <Text
            as='span'
            variant='text-body-meta-regular'
            color='text-secondary'
            >
          All Rights Reserved. 
          </Text>
          <Text
            as='span'
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
