import React from 'react';
import { Box, Flex } from '@cmpsr/components'
import NavBar from './components/NavBar';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import RequestDemo from './components/RequestDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
      <Box
      bg='background-dark' 
      h='100vh'
      fontFamily='Roboto'
      >
        <Flex id='flex'
        w='80vw'
        direction='column' 
         
        >
          <NavBar />
          <Header />
          <SectionOne/>
          <SectionTwo />
          <SectionTwo />
          <RequestDemo />
          <Contact />
          <Footer />
        </Flex>
      </Box>
  );
}

export default App;
