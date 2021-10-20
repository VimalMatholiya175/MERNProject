import React, { useState } from 'react'
import UserContext from './UserContext'

export default function UserProvider(props) {

    const [user, setUser] = useState(null);

    const signUp = async (name, email, password) => {
        let response = await fetch("http://localhost:4099/auth/signup",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            }
        );
        response = await response.json();
        return response;
    }

    const signIn = async (email, password) => {
        let response = await fetch("http://localhost:4099/auth/signin",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            }
        );
        response = await response.json();
        return response;
    }

    const fetchUser = async () => {
        let response = await fetch("http://localhost:4099/auth/fetchUser",
            {
                method: 'GET',
                headers: { 'authtoken': localStorage.getItem('authtoken') }
            }
        );
        response = await response.json();
        if (response.success) {
            setUser(response.user);
        }

    }

    return (
        <UserContext.Provider value={{ signUp, signIn, user, fetchUser }}>
            {props.children}
        </UserContext.Provider>
    )
}
