import React from 'react'
import { Box, Text, Flex, Image, Button, IconArrowRight } from '@cmpsr/components'

interface Props {
    logo: any,
    text: string,
    btnText: string
}

export const Socials: React.FC<Props> = ({
    logo,
    text,
    btnText

}) => {
  return (
    <Box
    w='90%'
    h='100%'       
    >
      <Flex
        direction='column'
        gap='20px'
      >
        <Image
          w='32px'
          src={logo}
        ></Image>
        <Text
          padding='10px'
          variant='text-header-M'
          color='text-light'
        >
          {text}</Text>
        <Button 
        maxW='80%'
        size='m'
        variant='primary'
        borderRadius='99'
      >
        {btnText}
        {<IconArrowRight/>} 
      </Button>
      </Flex>
    </Box>
  )
}
