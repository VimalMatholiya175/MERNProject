import React from 'react'
import './style.css'
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <div>
            <div className="mycontainer">
                <form action="" className="form">
                    <h1>Sign In</h1>
                    <input type="email" id="email" name="email" placeholder="Email" />
                    <input type="password" id="password" name="password" placeholder="Password" />
                    <div className="link">
                        <Link to="/abc">Forgot Password ?</Link>
                    </div>
                    <input type="submit" value="Sign Up" className="mybtn" style={{display:'block',float: 'none', width: '80%',margin:'10px auto'}} />
                    <div className="link">
                        <Link to="/signup">New Here ?</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
