import React from 'react'
import './style.css'

export default function SignUp() {
    return (
        <div>
            <div className="mycontainer">
                <form action="" className="form">
                    <h1>Sign Up</h1>
                    <input type="text" id="name" name="name" placeholder="Name"/>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                    <input type="password" id="password" name="password" placeholder="Password"/>
                    <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password"/>
                    <input type="reset" value="Reset" className="mybtn"/>
                    <input type="submit" value="Sign Up" className="mybtn"/>
                </form>
            </div>
        </div>
    );
}
