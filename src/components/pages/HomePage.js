import React, { useState } from 'react'
import { useAuth } from "../../contexts/AuthContext";
import {useHistory} from "react-router-dom"

function HomePage() {
    const {currentuser,logout} =useAuth()
    const [error,setError] = useState("")
    const history = useHistory()

    async function handleLogout(){
        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Çıkış yapılamadı")
        }
    }
    return (
        <div>
            <h2>
                HomePage
            </h2>
        </div>
    )
}

export default HomePage
