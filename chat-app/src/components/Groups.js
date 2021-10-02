import React from 'react'
import search from '../images/search.svg'
import menu from '../images/menu.svg';


export default function Groups() {
    return (
        <>
            <div className="col-3 bg-white p-0 h-100">
                <header className="d-flex justify-content-between align-items-center">
                    <h4 className="mx-2 my-auto">Classroom</h4>
                    {/* create/join group dropdown-menu */}
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
                {/* search bar */}
                <div className="d-flex align-items-center" id="search">
                    <button className="bg-transparent mx-2">
                        <img src={search} />
                    </button>
                    <input className="form-control shadow-none bg-transparent" type="text" placeholder="Search..." />
                </div>
                {/* all groups */}
                <div id="groups">
                    <div id="1" className="h d-flex align-items-center">
                        <h5 className="group-img">EM</h5>
                        <h6 className="my-auto">Explore More</h6>
                    </div>
                    <div id="2" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-5th-Semester Lecture Discussion</h6>
                    </div>
                    <div id="3" className="h d-flex align-items-center left-nav">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-4th-Semester</h6>
                    </div>
                    <div id="4" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-6th-Semester</h6>
                    </div>
                    <div id="5" className="h d-flex align-items-center">
                        <h5 className="group-img">EM</h5>
                        <h6 className="my-auto">Explore More...</h6>
                    </div>
                    <div id="8" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-5th-Semester Lecture Discussion</h6>
                    </div>
                    <div id="6" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-4th-Semester</h6>
                    </div>
                    <div id="9" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-6th-Semester</h6>
                    </div>
                    <div id="10" className="h d-flex align-items-center">
                        <h5 className="group-img">EM</h5>
                        <h6 className="my-auto">Explore More...</h6>
                    </div>
                    <div id="12" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-5th-Semester Lecture Discussion</h6>
                    </div>
                    <div id="13" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-4th-Semester</h6>
                    </div>
                    <div id="14" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-6th-Semester</h6>
                    </div>
                    <div id="12" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-5th-Semester Lecture Discussion</h6>
                    </div>
                    <div id="13" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-4th-Semester</h6>
                    </div>
                    <div id="14" className="h d-flex align-items-center">
                        <h5 className="group-img">DC</h5>
                        <h6 className="my-auto">DDU-CE-6th-Semester</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
