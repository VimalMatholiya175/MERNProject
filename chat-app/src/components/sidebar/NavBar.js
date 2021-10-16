import React from 'react'
import menu from '../../images/menu.svg';
import CreateGroup from './CreateGroup';
import { useHistory } from "react-router-dom";
import JoinGroup from './JoinGroup';


export default function NavBar() {
    
    let location = useHistory();
    const handleLogout = ()=>{
        localStorage.removeItem('authtoken');
        location.push('/signin');
    }
    return (
        <>
            <CreateGroup />
            <JoinGroup />
            <header className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#2f2d52' }}>
                <h4 className="mx-2 my-auto">Classroom</h4>
                <div className="mx-3 dropleft">
                    <button className="bg-transparent" id="add-group" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={menu} />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="add-group">
                        <li><span className="dropdown-item" data-bs-toggle="modal" data-bs-target="#Create">Create Group</span></li>
                        <li><span className="dropdown-item" data-bs-toggle="modal" data-bs-target="#Join">Join Group</span></li>
                        <li><a href="viewProfile.html" className="dropdown-item">Profile</a></li>
                        <li><span className="dropdown-item" onClick={handleLogout}>Logout</span></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
