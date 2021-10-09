import React, { useState } from 'react'

export default function SignUp() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const handleOnChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value }); //Good
    }
    const handleOnClick = async (event) => {
        event.preventDefault();
        if (user.password === user.cpassword) {
            let response = await fetch("http://localhost:4099/auth/signup",
                {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},            // Request headers. format is the identical to that accepted by the Headers constructor (see below)
                    body: JSON.stringify({name:user.name,email:user.email,password:user.password})
                }
            );
            response = await response.json();
            console.log(response);
            // console.log("asdkjbasbd");
        }
    }

    return (
        <div>
            <div className="acontainer">
                <form className="form" method="post">
                    <h1>Sign Up</h1>
                    <input type="text" id="name" name="name" value={user.name} onChange={handleOnChange} placeholder="Name" required />
                    <input type="email" id="email" name="email" value={user.email} onChange={handleOnChange} placeholder="Email" required />
                    <input type="password" id="password" name="password" value={user.password} onChange={handleOnChange} placeholder="Password" required />
                    <input type="password" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleOnChange} placeholder="Confirm Password" required />
                    <input type="reset" value="Reset" className="abtn" />
                    <input type="submit" value="Sign Up" className="abtn" onClick={handleOnClick} />
                </form>
            </div>
        </div>
    );
}
