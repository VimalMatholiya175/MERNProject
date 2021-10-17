import React from 'react'

export default function SendMessage() {
    return (
        <>
            <footer className="d-flex align-items-center justify-content-between">
                <input type="text" className="form-control shadow-none bg-transparent mx-1" placeholder="Type a Message..." />
                <div className="d-flex">
                    <i className="fa fa-send-o mx-3" style={{ fontSize: '21px', color: 'green' }}></i>
                    <i className="fa fa-paperclip mx-3" style={{ fontSize: '21px', color: 'darkgrey' }}></i>
                </div>
            </footer>
        </>
    )
}
