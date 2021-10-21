import React, { useState } from 'react'
import GroupCode from './GroupCode';
import Members from './Members';

export default function GroupInfo() {

    const [isCoppied, setIsCoppied] = useState(false);

    const handleOnClick = () => {
        setIsCoppied(false);
    }

    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="group-info" aria-labelledby="group-info-offcanvas">
                <div className="offcanvas-header">
                    <h4 id="group-info-offcanvas" className="my-auto">Group Info</h4>
                    <button type="button" onClick={handleOnClick} className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <GroupCode isCoppied={isCoppied} setIsCoppied={setIsCoppied}/>
                    <Members />
                </div>
            </div>
        </>
    )
}
