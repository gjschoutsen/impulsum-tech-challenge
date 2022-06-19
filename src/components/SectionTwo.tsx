import React from 'react'
import { Box, Text, Flex} from '@cmpsr/components'
import DesignSystemTool from '../images/DesignSystemTool.svg';
import ComponentCatalog from '../images/ComponentCatalog.svg';
import { FeaturedItemsTwo } from './FeaturedItemsTwo';

export default function SectionTwo() {
  return (
    <Box
     w='100%'
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
                <FeaturedItemsTwo 
                componentCatalog={ComponentCatalog}
                title={'Apply your Brand Identity into our'}
                titleBlue={'Design System Tool'}
                paragraph={'We have created the most flexible Design System tool to enable you to easily deploy your brand color scheme, fonts, images, and style into it to create your personalized Theme, or if you need it multi-brand themes!'}
                />
                    <FeaturedItemsTwo 
                componentCatalog={DesignSystemTool}
                title={'Get your perfect branded and coded'}
                titleBlue={'Component Catalog'}
                paragraph={'Once your brand theming is applied you can rapidly launch modern experiences with a space grade React component catalog based on the ubiquitous open-source Chakra UI library.'}
                />
            </Flex>
        </Flex>
    </Box>
  )
}
