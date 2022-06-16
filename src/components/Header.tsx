import React from 'react'
import '../css/Header.css'
import {Button, Text, Heading} from '@chakra-ui/react'

export default function Header() {
  return (

    <div className='header-box'>
      <div className='title-box'>
        <Heading as='h1' fontSize='6xl'>  Deploy modern web experiences
              with the smartest web builder
        </Heading>
      </div>
      <div className='subtext-box'>
        <Text fontSize='2xl'>
            Introducing Composer - the most advanced web and landing page builder for non-programmers
            that helps you to speed up your digital production processes
        </Text>
      </div>
      <div>
        <Button
          roundedRight='99' 
          roundedLeft='99' 
          colorScheme="blue"
          >Request your free demo
        </Button>
      </div>
    </div>
  )
}
