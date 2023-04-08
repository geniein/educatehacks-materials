import React, { createContext, useState } from "react"

export const Context = createContext({
    loggedUser: {
        username: '',
        email: '',
        name: '',
    },
    loggedIn: false,
    setLoggedUser: () => {},
    setLoggedIn: () => {},
    showModal: false,
    setShowModal: ()=> {},
    modalFlag:{
        flag:''
    },
    setModalFlag: ()=> {}
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
    
    const setShowModal = (data) =>{        
        setState(prevState => (
            {
                ...prevState, 
                showModal: data
            }
        ))            
    }
    
    const setModalFlag = (data) =>{        
        setState(prevState => (
            {
                ...prevState, 
                modalFlag: data
            }
        ))            
    }

    const initialState = {
        loggedUser: {},
        loggedIn: false,
        setLoggedUser,
        setLoggedIn,
        showModal: false,
        setShowModal,
        modalFlag: {},
        setModalFlag
    }

    const [state, setState] = useState(initialState);    

    

    return (
        <Context.Provider value={state}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;