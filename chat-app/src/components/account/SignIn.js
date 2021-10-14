import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";

export default function SignIn() {

    const [user, setUser] = useState({email: "", password: ""});
    const [error, setError] = useState("");
    const location = useHistory();

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
        if(!response.success){
            setError(response.error);
        }
        else{
            localStorage.setItem("authtoken", response.authtoken);
            setUser({email: "", password: ""});
            setError("");
            location.push("/");
        }
    }
    return (
        <div>
            <div className="acontainer">
                <form className="form">
                    <h1>Sign In</h1>
                    <h5 style={{color: 'red',textAlign : 'center'}}>{error}</h5>
                    <input type="email" id="email" name="email" value={user.email} onChange={handleOnChange} placeholder="Email" required />
                    <input type="password" id="password" name="password" value={user.password} onChange={handleOnChange} placeholder="Password" required />
                    <div className="link">
                        <Link to="/abc">Forgot Password ?</Link>
                    </div>
                    <input type="submit" value="Sign In" className="btn-large" onClick={handleOnClick} />
                    <div className="link">
                        New Here ? &nbsp;<Link to="/signup">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
