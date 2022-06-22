import React from 'react'
import { Box, Text, Flex, Image } from '@cmpsr/components'
interface Props {
    img: any,
    title: string,
    titleBlue: string,
    paragraph: string
}

export const FeaturedItemsTwo: React.FC<Props> = ({
    img,
    title,
    titleBlue,
    paragraph

}
) => {
  return (
      <Flex
        direction='column'
        alignItems='center'
        gap='20px'          
        >
            <Image
                src={img}
            ></Image>
            <Box
                padding={['40px', '0px']}                        
                w={['100%', '450px']}
            >
                <Text
                    as='span'
                    color='text-light'
                    variant='text-header-XL'
                >{title}</Text>                 
                <Text
                    as='span'
                    color='primary-default'
                    variant='text-header-XL'
                >{titleBlue}</Text>
                <Text
                    fontFamily='Inter'
                    color='text-secondary'
                >{paragraph}</Text>
            </Box>
        </Flex>
  )
}
