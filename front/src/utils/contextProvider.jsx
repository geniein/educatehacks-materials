import React, { createContext, useState } from "react"

export const Context = createContext({
    loggedUser: {
        username: '',
        email: '',
        name: '',
    },
    loggedIn: false,
    setLoggedUser: () => {},
    setLoggedIn: () => {}
});

const ContextProvider = ({children}) => {
    const setLoggedUser = (data) => {
        setState(prevState => (
            {
                ...prevState,
                loggedUser: data
            }
        ))
    }

    const setLoggedIn = (data) => {        
        setState(prevState => (
            {
                ...prevState, 
                loggedIn: data
            }
        ))
    }

    const initialState = {
        loggedUser: {},
        loggedIn: false,
        setLoggedUser,
        setLoggedIn
    }

    const [state, setState] = useState(initialState);

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;