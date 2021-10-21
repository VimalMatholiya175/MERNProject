import React from 'react'

export default function Search() {
    return (
        <>
            <div className="d-flex align-items-center" style={{ backgroundColor: 'white', height: '7%' }}>
                <input className="form-control shadow-none mx-2 search-input" type="text" placeholder="Search..." />
            </div>
        </>
    )
}
