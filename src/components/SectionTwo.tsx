import React from 'react'
import { Box, Text, Flex, Image } from '@cmpsr/components'
import DesignSystemTool from '../images/DesignSystemTool.svg';
import ComponentCatalog from '../images/ComponentCatalog.svg';

export default function SectionTwo() {
  return (
    <Box
     w='100%'
     padding= {['0px','50px 106px']}
     bg='background-page'
    >
        <Flex
            direction='column'
            align='center'
            gap={['10px', '88px']}
        >
            <Flex
            direction='column'
            padding={['50px', '0']}
            gap='10px'
            >
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
            </Flex>

            <Flex
                gap='10px'
                justify='center'
                direction={['column', 'row']}
                padding={['10px', '0']}
            >
                {/* ------COMPONENT 1-------- */}
                <Flex
                direction='column'
                alignItems='center'          
                >
                    <Image
                        
                        src={DesignSystemTool}
                    ></Image>
                    <Box
                        // padding='40px'
                        padding={['40px', '40px 150px']}
                    >
                        <Text
                            as='span'
                            color='text-light'
                            variant='text-header-XL'
                        >
                            Apply your Brand Identity into our </Text> 
                            
                            <Text
                                as='span'
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
                </Flex>

                {/* ------COMPONENT 2-------- */}
                <Flex
                direction='column'
                alignItems='center'          
                >
                    <Image
                        src={ComponentCatalog}
                    ></Image>
                <Box
                    padding={['40px', '40px 80px']}
                >
                    <Text
                        as='span'
                        color='text-light'
                        variant='text-header-XL'
                    >
                        Get your perfect branded and coded </Text> 
                        
                        <Text
                            as='span'
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
            </Flex>
        </Flex>
    </Box>
  )
}
