import React, { useContext } from 'react'
import Members from './Members';

export default function GroupInfo() {
    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="group-info" aria-labelledby="group-info-offcanvas">
                <div className="offcanvas-header">
                    <h4 id="group-info-offcanvas" className="my-auto">Group Info</h4>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Members />
                </div>
            </div>
        </>
    )
}
