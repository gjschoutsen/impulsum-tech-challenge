import React from 'react'
import {Flex, Image, Box, Text} from '@cmpsr/components'

interface Props {
  business: any,
  flexDir: string,
  title: string,
  subTitle: string,
  paragraph: string,
}


export const FeaturedItemsOne: React.FC<Props> = ({
  business,
  flexDir,
  title,
  subTitle,
  paragraph

}) => {
  return (
    
    <Flex 
    direction={['column', 'row']}
  >
      <Image 
        w='604'
        // h='544'
        src={business}
      ></Image>
      <Flex 
        align='center'
      >
        <Box
          // w='500px'
          padding={['20px','0']}
          paddingTop={['100px','0']}
          >
          <Flex
            direction='column'
            alignItems={['center', 'flex-start']}          
          >  
            <Text
              color='primary-default'
            >{title}</Text>
            <Text
              align={['center','left']}
              variant='text-header-2XL'
              color='text-light'
            >{subTitle}</Text>
            <Text
            align={['center','left']}
            fontFamily='Inter'
            color='text-secondary'
            >{paragraph}</Text>
          </Flex>
        </Box>
      </Flex> 
    </Flex>

  )
}