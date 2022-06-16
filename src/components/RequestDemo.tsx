import { Box, Button, Text, Flex, IconArrowRight } from '@cmpsr/components'
import React from 'react'

export default function RequestDemo() {
  return (
   <Box
    w='100%'
    h='540px'
   >
    <Flex
    justify='center'
    alignItems='Center'
    >
    <Box
    w='80%'
    h='380px'
    bg='primary-default'
    padding= '64px 80px 72px'
    >
      <Flex
        direction='column'
        alignItems='flex-start'
        gap='30px'
      >
      <Text
        variant='text-header-3XL'
        color='text-light'
      >Ready to deploy more and better products?</Text>
      <Button
        size='l'
        variant='primary-alt'
        borderRadius='99'
      >
      Request your free demo {<IconArrowRight/>}</Button>
      </Flex>
    </Box>
    </Flex>
   </Box>
  )
}
