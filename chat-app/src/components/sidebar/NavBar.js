import React, { useContext } from 'react'
import CreateGroup from './CreateGroup';
import { useHistory } from "react-router-dom";
import JoinGroup from './JoinGroup';
import UserContext from '../../contexts/user/UserContext'

export default function NavBar() {

    const { user } = useContext(UserContext);
    const location = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('authtoken');
        location.push('/signin');
    }

    return (
        <>
            <CreateGroup />
            <JoinGroup />
            <div className="d-flex justify-content-between align-items-center" style={{ backgroundColor: '#2f2d52', height: '9%', color: 'white' }}>
                <div className="user-img" title={user? user.name : ''}>
                    <i className="fas fa-user" style={{ color: 'white' }}></i>
                </div>
                <div className="d-flex">
                    <div className="me-3 dropleft">
                        <i className="fas fa-bars" style={{ color: 'white' }} id="add-group" data-bs-toggle="dropdown" aria-expanded="false"></i>
                        <ul className="dropdown-menu" aria-labelledby="add-group">
                            <li><span className="dropdown-item" data-bs-toggle="modal" data-bs-target="#create">Create Group</span></li>
                            <li><span className="dropdown-item" data-bs-toggle="modal" data-bs-target="#join">Join Group</span></li>
                        </ul>
                    </div>
                    <i className="fas fa-sign-out-alt me-3" onClick={handleLogout} title="Logout"></i>
                </div>
            </div>
        </>
    )
}
