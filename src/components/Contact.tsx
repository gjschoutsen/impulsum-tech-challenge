import React from 'react'
import { Box, Button, Flex, Image, Text, IconArrowRight } from '@cmpsr/components'
import Github from "../images/Github.svg"
import Figma from "../images/Figma.svg"

export default function Contact() {
  return (
    <Box
    w='80%'
    h='492px'
    padding= '92px 106px 164px'
    >
      <Flex
        justify='space-around'
        gap='200px'
      >
        <Box
        w='267px'
        
        >
            <Image
              src={Github}
            ></Image>
            <Text
              variant='text-header-M'
              color='text-light'
            >
              Composer is open-sourced on GitHub. You're welcome to contribute!</Text>
            <Button 
            size='m'
            variant='primary'
            borderRadius='99'
          >
            Contribute on GitHub
            {<IconArrowRight/>} 
          </Button>
        </Box>
        <Box
        w='267px'
        >
            <Image
              src={Figma}
            ></Image>
            <Text
              variant='text-header-M'
              color='text-light'
            >
              Composer is part of the Figma community. Visit us with the handle @impulsum</Text>
            <Button 
            size='m'
            variant='primary'
            borderRadius='99'
          >
            Contribute on Figma
            {<IconArrowRight/>} 
          </Button>
        </Box>
        <Box
        w='267px'
        >
          <Flex
          direction='column'
          gap='30px'
          >
            <Text
              variant='text-header-M'
              color='text-light'
            >
              Keep in touch</Text>
              <Text
                fontFamily='Inter'
                variant='text-link-body-small'
                color='text-light'
              >Share feedback on GitHub</Text>
              <Text
                fontFamily='Inter'
                variant='text-link-body-small'
                color='text-light'
              >Find us on Linkedin</Text>
              <Text
                fontFamily='Inter'
                variant='text-link-body-small'
                color='text-light'
              >Meet the crew on Instagram</Text>
              
          </Flex>    
        </Box>
      </Flex>

    </Box>
  )
}
