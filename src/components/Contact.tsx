import React from 'react'
import { Box, Button, Flex, Image, Text, IconArrowRight, Grid } from '@cmpsr/components'
import Github from "../images/Github.svg"
import Figma from "../images/Figma.svg"

export default function Contact() {
  return (
      <Grid
      padding= {['60px 20px','92px 106px 164px']}
      >
        <Flex
          direction={['column', 'row']}
          gap={['40px','200px']}
          
        >
      {/* -------GITHUB--------- */}
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
                src={Github}
              ></Image>
              <Text
                padding='10px'
                variant='text-header-M'
                color='text-light'
              >
                Composer is open-sourced on GitHub. You're welcome to contribute!</Text>
              <Button 
              maxW='80%'
              size='m'
              variant='primary'
              borderRadius='99'
            >
              Contribute on GitHub
              {<IconArrowRight/>} 
            </Button>
            </Flex>
          </Box>
      {/* -------FIGMA--------- */}
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
                src={Figma}
              ></Image>
              <Text
                variant='text-header-M'
                color='text-light'
              >
                Composer is part of the Figma community. Visit us with the handle @impulsum</Text>
              <Button 
                maxW='80%'
                size='m'
                variant='primary'
                borderRadius='99'
              >
                Contribute on Figma
                {<IconArrowRight/>} 
              </Button>
            </Flex>
          </Box>
        {/* -------LINKS-------- */}
          <Box
          w='90%'
          h='100%' 
          paddingTop={['20px','50px']}
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
      </Grid>
  )
}
