import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from './routes';
import { Button} from '@mui/material'
import React from 'react';
const App = ()=>{
    return(
        <>
        <HelmetProvider>
            <BrowserRouter>                
                <Router /> 
            </BrowserRouter>
        </HelmetProvider>        
        </>
    )    
}

export default App;