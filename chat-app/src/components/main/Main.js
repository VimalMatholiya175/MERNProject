import React from 'react'
import { Link } from 'react-router-dom'
import groupInfo from '../../images/group-info.svg'
import sendMessage from '../../images/send-message.svg'
import attachFile from '../../images/attach-file.svg'

export default function Main() {
    return (
        <>
            <div className="h-100" >
                <header className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <h5 className="group-img">EM</h5>
                        <h5 className="my-auto">DDU-CE-6th-Semester</h5>
                    </div>
                    <Link className="bg-transparent" to="/groupinfo">
                        <img src={groupInfo} className="mx-3" style={{ width: '28px', height: '28px' }} />
                    </Link>
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
        </>
    )
}
