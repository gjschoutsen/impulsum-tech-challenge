import React from 'react'
import { Box, Text, Flex, Button, IconArrowRight, Image } from '@cmpsr/components';
import Business from "../images/Business.svg"
import Marketing from "../images/Marketing.svg"

export default function SectionOne() {

  return (
    <Box
      w= "80%"
      h='1524px'
      padding='112px 106px 192px'
    >
      <Flex 
        
      >
        <Image 
          w='604'
          h='544'
          src={Business}
        ></Image>
        <Flex 
          align='center'
          // direction={["column"]}
        >
        <Box
          w='500px'
        >
          <Flex 
            direction='column'
            alignItems='flex-start'
          >  
            <Text
              color='primary-default'
            >For Startups & Business Owners</Text>
            <Text
              variant='text-header-2XL'
              color='text-light'
            >We support the way you run your Business</Text>
            <Text
            fontFamily='Inter'
            color='text-secondary'
            >With our drag-and-drop web editor and customizable professional templates that fit your brand, you'll be online in no time.</Text>
          </Flex>
        </Box>
        </Flex> 
        </Flex>
      
      <Flex>
        <Flex
           align='center'
        >
        <Box
          w='500px'
        >
          <Flex
            direction='column'
            alignItems='flex-start'
          >  
            <Text
              color='primary-default'
            >For Marketing Experts</Text>
            <Text
              variant='text-header-2XL'
              color='text-light'
            >Get better conversion rates</Text>
            <Text
            fontFamily='Inter'
            color='text-secondary'
            >We help you create high-converting landing pages, engaging popups, integrated SEO, and social media integrations to reach a wider audience and optimize conversion rates using precise and customized A/B testing, and analytical insights.</Text>
          </Flex>
        </Box>
        </Flex> 
        <Image 
          w='604'
          h='544'
          src={Marketing}
        ></Image>
        </Flex>
      
    </Box>
  )
}
