import React from 'react'
import GroupMember from './GroupMember'

export default function GroupInfo() {
    return (
        <>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="group-info" aria-labelledby="group-info-offcanvas">
                <div className="offcanvas-header">
                    <h5 id="group-info-offcanvas">Explore More</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="bg-white" style={{ height: '60%', overflowY: 'auto' }}>
                        <div className="">
                            <h6 className="mx-2">Members</h6>
                        </div>
                        <GroupMember />
                        <GroupMember />
                        <GroupMember />
                        <GroupMember />
                    </div>
                </div>
            </div>
        </>
    )
}
