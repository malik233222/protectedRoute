import { useContext, createContext, useState } from 'react'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
export const generalContext = createContext()

function GeneralContextProvider({ children }) {

    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState(Cookies.get('idToken') ? Cookies.get('idToken') : undefined)

    const setIdToken = (idToken) => {
        Cookies.set('idToken', idToken, { secure: false })
        setToken(idToken)

    }
    const logOut = () => {
        Cookies.remove('idToken')
        setToken(undefined)

    }
    const values = {
        loading,
        setLoading,
        setIdToken,
        token,
        logOut
    }

    return (
        <generalContext.Provider value={values}>
            {children}
        </generalContext.Provider>

    )
}

export default GeneralContextProvider