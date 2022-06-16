import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ComposerProvider } from '@cmpsr/components';
import {theme} from './theme/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ComposerProvider theme={theme}>
        <App />
    </ComposerProvider>
  </React.StrictMode>
);
