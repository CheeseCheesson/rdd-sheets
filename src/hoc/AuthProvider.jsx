import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const setLogin = (newUser, cb) => {
        setUser(newUser)
        cb()
    }
    const logOut = (cb) => {
        setLogin(null)
        cb()
    }
    const value = {user, setLogin, logOut}
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
