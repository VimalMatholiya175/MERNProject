import React, { useState } from 'react'
import { Link } from "react-router-dom";

export default function SignIn() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleOnChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value }); //Good
    }
    const handleOnClick = async (event) => {
        event.preventDefault();
        let response = await fetch("http://localhost:4099/auth/signin",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },            // Request headers. format is the identical to that accepted by the Headers constructor (see below)
                body: JSON.stringify({email: user.email, password: user.password })
            }
        );
        response = await response.json();
        console.log(response);
    }
    return (
        <div>
            <div className="acontainer">
                <form action="" className="form">
                    <h1>Sign In</h1>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleOnChange} placeholder="Email" />
                    <input type="password" id="password" name="password" value={user.password} onChange={handleOnChange} placeholder="Password" />
                    <div className="link">
                        <Link to="/abc">Forgot Password ?</Link>
                    </div>
                    <input type="submit" value="Sign In" className="abtn" onClick={handleOnClick} style={{ display: 'block', float: 'none', width: '80%', margin: '10px auto' }} />
                    <div className="link">
                        <Link to="/signup">New Here ?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
