import React from 'react'
import { Box, Flex, Text, Grid } from '@cmpsr/components'
import Github from "../images/Github.svg"
import Figma from "../images/Figma.svg"
import { Socials } from './Socials'

export default function Contact() {
  return (
      <Grid
      padding= {['60px 20px','92px 106px 164px']}
      >
        <Flex
          direction={['column', 'row']}
          gap={['40px','200px']}

        >
        <Socials 
          logo={Github}
          text={"Composer is open-sourced on GitHub. You're welcome to contribute!"}
          btnText={'Contribute on GitHub'}
        />
         
        <Socials 
            logo={Figma}
            text={"Composer is part of the Figma community. Visit us with the handle @impulsum"}
            btnText={'Contribute on Figma'}
          />
          
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
