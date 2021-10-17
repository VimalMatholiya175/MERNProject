import React from 'react'
import CreateGroup from './CreateGroup';
import { useHistory } from "react-router-dom";
import JoinGroup from './JoinGroup';


export default function NavBar() {

    let location = useHistory();
    const handleLogout = () => {
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
                        <i className="fa fa-bars" style={{ fontSize: '25px', color: 'white' }}></i>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="add-group">
                        <li><span className="dropdown-item" data-bs-toggle="modal" data-bs-target="#create">Create Group</span></li>
                        <li><span className="dropdown-item" data-bs-toggle="modal" data-bs-target="#join">Join Group</span></li>
                        <li><a href="viewProfile.html" className="dropdown-item">Profile</a></li>
                        <li><span className="dropdown-item" onClick={handleLogout}>Logout</span></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
