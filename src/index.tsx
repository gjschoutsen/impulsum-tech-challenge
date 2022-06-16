import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react'
import { ComposerProvider } from '@cmpsr/components';
import {theme} from './theme/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ComposerProvider theme={theme}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ComposerProvider>
  </React.StrictMode>
);
