import React from 'react';
import ReactDOM from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import './index.css';
import { Index } from './Index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroUIProvider>
      <Index />
    </HeroUIProvider>
  </React.StrictMode>,
)
