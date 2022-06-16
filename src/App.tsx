import React from 'react';
import { Box, Flex } from '@cmpsr/components'
import NavBar from './components/NavBar';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import RequestDemo from './components/RequestDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionTwo from './components/SectionTwo';

function App() {
  
  return (
    <Box
    bg='background-dark' 
    h='100%vh'
    fontFamily='Roboto'
    >
    <Flex id='flex'
          align='center'
          direction='column'          
        >
          <NavBar />
          <Header />
          <SectionOne/>
          <SectionTwo/>
          <RequestDemo />
          <Contact />
          <Footer />
        </Flex>
      </Box>
  );
}

export default App;
