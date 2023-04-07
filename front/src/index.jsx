import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { theme } from './theme/indexj';

const container = document.querySelector('#root')
const root = ReactDOM.createRoot(container)
root.render(
    <React.StrictMode>
        {/* <ThemeProvider theme={theme}> */} 
        <App />
        {/* </ThemeProvider> */}
    </React.StrictMode>
)