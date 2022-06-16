import React from 'react';
import './css/App.css';
import { Container } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import RequestDemo from './components/RequestDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  
  return (
    <>
      <Container maxW="1440px" centerContent>
        <NavBar />
        <Header />
        <SectionOne />
        <SectionOne />
        <SectionTwo />
        <RequestDemo />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
