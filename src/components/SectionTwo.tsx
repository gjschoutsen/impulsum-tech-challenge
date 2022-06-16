import React from 'react'
import { Box, Text, Flex, Image } from '@cmpsr/components'
import DesignSystemTool from '../images/DesignSystemTool.svg';
import ComponentCatalog from '../images/ComponentCatalog.svg';

export default function SectionTwo() {
  return (
    <Box
     w='100%'
     h='1034px'
     padding= '132px 106px'
     bg='background-page'
    >
        <Flex
            direction='column'
            align='center'
            gap='88px'
        >
        <Box>
        <Text
            variant='text-header-2XL'
            color='text-light'
            align='center'
        >
            We have got what you need
        </Text>
        <Text
            variant='text-body-display-S'
            fontFamily='Inter'
            align='center'
            color='text-secondary'
        >
        Learn more about the amazing features our team is developing.
        </Text>
        </Box>
        <Flex
            w='80%'
            gap='30px'
        >
            <Box
             w='540px'
            >
                <Image
                    src={DesignSystemTool}
                ></Image>
                <Text
                    color='text-light'
                    variant='text-header-XL'
                >
                    Apply your Brand Identity into our </Text> 
                    
                    <Text
                        color='primary-default'
                        variant='text-header-XL'
                    >Design System Tool</Text>
                    <Text
                        fontFamily='Inter'
                        color='text-secondary'
                    >
                        We have created the most flexible Design System tool to enable you to easily deploy your brand color scheme, fonts, images, and style into it to create your personalized Theme, or if you need it multi-brand themes!
                    </Text>

            </Box>
            <Box
                  w='540px'
            >
               <Flex
                    direction='column'
                    gap='10px'
               > 
                <Image
                    src={ComponentCatalog}
                    ></Image>
                 <Box>   
                 <Text
                    variant='text-header-XL'
                    color='text-light'
                >
                    Get your perfect branded and coded </Text> 
                    <Text
                     color='primary-default'
                     variant='text-header-XL'
                    >Component Catalog</Text>
                     <Text
                        fontFamily='Inter'
                        color='text-secondary'
                    >
                       Once your brand theming is applied you can rapidly launch modern experiences with a space grade React component catalog based on the ubiquitous open-source Chakra UI library.
                    </Text>
                    </Box>
                </Flex>
            </Box>


        </Flex>
        </Flex>
    </Box>
  )
}
