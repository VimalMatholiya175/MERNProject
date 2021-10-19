import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import UserContext from '../../contexts/user/UserContext';

export default function SignUp() {

    const { signUp } = useContext(UserContext);
    const [user, setUser] = useState({name: "", email: "", password: "", cpassword: ""});
    const [error, setError] = useState("");
    const location = useHistory();

    const handleOnChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    }
    const handleOnClick = async (event) => {
        event.preventDefault();
        if (user.password === user.cpassword) {
            let response = await signUp(user.name, user.email, user.password);
            if(!response.success){
                setError(response.error);
            }
            else{
                setUser({name: "", email: "", password: "", cpassword: ""});
                setError("");
                location.push("/signin");
            }
        }
        else{
            setError("Password doesn't match");
        }
    }

    return (
        <div>
            <div className="acontainer">
                <form className="form" method="post">
                    <h1>Sign Up</h1>
                    <h5 style={{color: 'red',textAlign : 'center'}}>{error}</h5>
                    <input type="text" id="name" name="name" value={user.name} onChange={handleOnChange} placeholder="Name" required minLength={3} />
                    <input type="email" id="email" name="email" value={user.email} onChange={handleOnChange} placeholder="Email" required />
                    <input type="password" id="password" name="password" value={user.password} onChange={handleOnChange} placeholder="Password" required />
                    <input type="password" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleOnChange} placeholder="Confirm Password" required />
                    <input type="reset" value="Reset" className="btn-small" />
                    <input type="submit" value="Sign Up" className="btn-small" onClick={handleOnClick} />
                </form>
            </div>
        </div>
    );
}
