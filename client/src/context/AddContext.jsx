import { createContext } from "react";

export const AddContext = createContext()

export const AddContextProvider = (props) =>{

    const value={

    }
    return(
        <AddContext.Provider value={value}>
            {props.children}
        </AddContext.Provider>
    )
}

