import { UNSAFE_convertRoutesToDataRoutes } from '@remix-run/router'
import React, { createContext, useContext, useMemo, useReducer, useState} from 'react'
import userReducer  from '../components/reducers/userReducer'

export const initialState = {
        user: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmationCode: '',
    item: [], 
}

export const UserContext = createContext(initialState)

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, initialState)
    const [email, setEmail] = useState()
    const [signedInUser, setSignedInUser] = useState()
    // const currentUser = useMemo(() => ({signedInUser, setSignedInUser}), [signedInUser, setSignedInUser]);
 
    

    const userEmail = (email) =>  {
        setEmail(email)
        dispatch({
            type: "USER_EMAIL",
            payload: {
                email: email
            }
        })
    }



   const guestSession = () => {
        dispatch({
            type: "GUEST_SESSION", 
            payload: {
            user: null,
            }
        })
    }

    const userSession = (user) => {
        setSignedInUser(user)
        dispatch({
            type: "USER_SESSION",
            payload: {
                user: user
            }
        })
    }

    const signingIn = (email, password) => {
        dispatch({
            type: "SIGN_IN",
            payload: {
                email: email,
                password: password,
            }
        })
    }

    const signingUp = (firstName, lastName, email, password)=>  {
        dispatch({
            type: "SIGN_UP",
            payload: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            }
        })
    }

    const confirmSignUp = (email, code) => {
        dispatch({
            type: "CONFIRM",
            payload: {
                email: email,
                confirmationCode: code
            }
        })
    }

    const value = {
        email,
        signedInUser, 
        setSignedInUser,
        userEmail,
        guestSession,
        userSession,
        signingIn,
        signingUp,
        confirmSignUp,
    
    }

    return <UserContext.Provider value={value}>

        {children}
    </UserContext.Provider>
}

 const useUser = () => {
    const context = useContext(UserContext)

    if (context === undefined){
        throw new Error("please use context")
    }
    

    return context;
}

export default useUser;