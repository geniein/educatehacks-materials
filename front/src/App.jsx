import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from './routes';
import { Button} from '@mui/material'
import React from 'react';
const App = ()=>{
    const state = {
        value : 'hello world!'
    }   

    return(
        <>
        <HelmetProvider>
            <BrowserRouter>
                <Button >{state.value}</Button>
                <Router /> 
            </BrowserRouter>
        </HelmetProvider>        
        </>
    )    
}

export default App;