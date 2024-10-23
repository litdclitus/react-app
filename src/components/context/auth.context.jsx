import { createContext, useState } from "react";

export const AuthContext = createContext({
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: ""
})

export const AuthWrapper = (props) => {
    const [userLogin, setUserLogin] = useState({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
    })

    const [isAppLoading, setIsAppLoading] = useState(true);

    return (
        <AuthContext.Provider value={{ userLogin, setUserLogin, isAppLoading, setIsAppLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}