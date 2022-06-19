import React from 'react'
import { Box, Button, Text, Flex, IconArrowRight } from '@cmpsr/components'

export default function RequestDemo() {
  return (
   <Box
    w='100%'
    padding={['0px', '112px 106px']}
   >
    <Flex
    justify='center'
    alignItems='Center'
    >
      <Box
      w={['90%','100%']}
      bg='primary-default'
      padding= {['30px','64px 80px 72px']}
      >
        <Flex
          direction='column'
          alignItems='flex-start'
          gap='30px'
        >
        <Text
          align={['center', 'left']}
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
