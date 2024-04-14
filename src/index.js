import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import './index.css'
import { ContextProvider } from './contexts/ContextProvider';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container)
root.render(
    <ContextProvider>
        <App/>
    </ContextProvider>
)
