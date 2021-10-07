import React from 'react'
import search from '../../images/search.svg'

export default function Search() {
    return (
        <>
            <div className="d-flex align-items-center search">
                <button className="bg-transparent mx-2">
                    <img src={search} />
                </button>
                <input className="form-control shadow-none bg-transparent" type="text" placeholder="Search..." />
            </div>
        </>
    )
}
