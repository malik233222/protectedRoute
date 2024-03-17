import { useContext } from "react"
import { generalContext } from "../context/generalContext"
import { Navigate, Outlet } from "react-router-dom"

export default function ProtoctedRoute() {
    const { token } = useContext(generalContext)

    if (token) {
        return (
            <Outlet />
        )

    } else {
        return (
            <Navigate to='/login' />
        )
    }

}
