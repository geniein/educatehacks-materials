import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from './routes';
import { Button} from '@mui/material'
import React from 'react';
import ContextProvider from './utils/contextProvider';
const App = ()=>{
    return(
        <>
        <HelmetProvider>
        <ContextProvider>
            <BrowserRouter>                
                <Router /> 
            </BrowserRouter>
        </ContextProvider>
        </HelmetProvider>        
        </>
    )    
}

export default App;