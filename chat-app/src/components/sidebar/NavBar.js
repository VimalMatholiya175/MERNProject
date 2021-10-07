import React from 'react'
import menu from '../../images/menu.svg';

export default function NavBar() {
    return (
        <>
            <header className="d-flex justify-content-between align-items-center">
                <h4 className="mx-2 my-auto">Classroom</h4>
                <div className="mx-3 dropleft">
                    <button className="bg-transparent" id="add-group" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={menu} />
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="add-group">
                        <li><a href="/" className="dropdown-item" data-bs-toggle="modal" data-bs-target="/Create">Create Group</a></li>
                        <li><a href="/" className="dropdown-item" data-bs-toggle="modal" data-bs-target="/Join">Join Group</a></li>
                        <li><a href="viewProfile.html" className="dropdown-item">Profile</a></li>
                        <li><a href="/" className="dropdown-item" >Logout</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}
