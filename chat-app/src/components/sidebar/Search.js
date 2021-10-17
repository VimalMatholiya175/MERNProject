import React from 'react'

export default function Search() {
    return (
        <>
            <div className="d-flex align-items-center search">
                <i className="fa fa-search mx-2" style={{ fontSize: '21px', color: 'black' }}></i>
                <input className="form-control shadow-none bg-transparent" type="text" placeholder="Search..." />
            </div>
        </>
    )
}
