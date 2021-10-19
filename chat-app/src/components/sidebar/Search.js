import React from 'react'

export default function Search() {
    return (
        <>
            <div className="d-flex align-items-center" style={{backgroundColor: 'white', height: '7%'}}>
                {/* <i className="fas fa-search mx-2" style={{ fontSize: '20px', color: 'black' }}></i> */}
                <input className="form-control shadow-none mx-2 rounded-pill" type="text" placeholder="Search..." />
            </div>
        </>
    )
}
