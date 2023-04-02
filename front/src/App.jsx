const React = require('react')
import { Button} from '@mui/material'

const App = ()=>{
    const state = {
        value : 'hello world!'
    }   

    return(
        <>        
         <Button >{state.value}</Button>       
        </>
    )    
}

export default App;