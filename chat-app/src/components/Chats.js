import React from 'react'
import attachFile from '../images/attach-file.svg'
import back from '../images/back.svg'
import edit from '../images/edit.svg'
import groupInfo from '../images/group-info.svg'
import sendMessage from '../images/send-message.svg'

export default function Chats() {
    return (
        <>
            <div className="col-9 p-0 h-100">
                <div id="group-chat" className="h-100">
                    <header className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <h5 className="group-img">EM</h5>
                            <h5 className="my-auto">DDU-CE-6th-Semester</h5>
                        </div>
                        <button className="bg-transparent" onclick="GroupInfo()">
                            <img src={groupInfo} className="mx-3" style={{ width: '28px', height: '28px' }} />
                        </button>
                    </header>
                    <main>

                    </main>
                    <footer className="d-flex align-items-center justify-content-between">
                        <input type="text" className="form-control shadow-none bg-transparent mx-1" placeholder="Type a Message..." />
                        <div>
                            <button className="bg-transparent">
                                <img src={sendMessage} className="mx-3" />
                            </button>
                            <button className="bg-transparent">
                                <img src={attachFile} className="mx-3" />
                            </button>
                        </div>
                    </footer>
                </div>

                <div id="group-info" className="h-100" style={{ display: 'none' }}>
                    <header className="d-flex align-items-center p-3 mb-4">
                        <button className="bg-transparent" onclick="GroupChat()">
                            <img src={back} className="mx-1" />
                        </button>
                        <h4 className="mx-2 my-auto">Explore More..</h4>
                        {/* <!-- <button className="bg-transparent mx-2">
                            <img src="images/edit.svg" className="mx-1"/>
                        </button> --> */}
                    </header>
                    <div id="group-desc" className="bg-white p-3 m-4">
                        <h4 className="mx-2">Description</h4>
                        <p className="mx-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque delectus eius commodi quo obcaecati autem quod eum voluptate sequi porro saepe reiciendis molestias voluptatum quidem maxime voluptatibus non cum iure quibusdam, expedita officiis! Vel voluptatem magni atque. Laboriosam, nulla voluptatum.</p>
                    </div>
                    <div id="group-members" className="bg-white p-3 m-4">
                        <div className="">
                            <h4 className="mx-2">Members</h4>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">GM</h5>
                            <h6 className="my-auto">Gopal Malaviya</h6>
                            <h6 className="mx-5 text-primary my-auto">admin</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">KG</h5>
                            <h6 className="my-auto">Kenil Gopani</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">VM</h5>
                            <h6 className="my-auto">Vimal Matholiya</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">GM</h5>
                            <h6 className="my-auto">Gopal Malaviya</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">KG</h5>
                            <h6 className="my-auto">Kenil Gopani</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">VM</h5>
                            <h6 className="my-auto">Vimal Matholiya</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">GM</h5>
                            <h6 className="my-auto">Gopal Malaviya</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">KG</h5>
                            <h6 className="my-auto">Kenil Gopani</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">VM</h5>
                            <h6 className="my-auto">Vimal Matholiya</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">GM</h5>
                            <h6 className="my-auto">Gopal Malaviya</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">KG</h5>
                            <h6 className="my-auto">Kenil Gopani</h6>
                        </div>
                        <div id="1" className="h d-flex align-items-center">
                            <h5 className="user-img">VM</h5>
                            <h6 className="my-auto">Vimal Matholiya</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
