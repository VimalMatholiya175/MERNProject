import React from 'react'
import GroupMember from './GroupMember'

export default function GroupInfo() {
    return (
        <>
            {/* <div className="h-100 d-none" style={{ backgroundColor: '#dcdef7' }}>
                <div className="d-flex align-items-center p-3 mb-4" style={{ backgroundColor: '#5c5a8c', height: '9%', color: 'white' }}>
                    <Link className="bg-transparent" to="/">
                         <img src={back} className="mx-1" />
                    </Link>
                    <h4 className="mx-2 my-auto">Explore More..</h4>
                </div>
                <div className="bg-white p-3 m-4 group-members">
                    <div className="">
                        <h4 className="mx-2">Members</h4>
                    </div>
                    <GroupMember />
                </div>
            </div> */}

            <div className="offcanvas offcanvas-end" tabindex="-1" id="group-info" aria-labelledby="group-info-offcanvas">
                <div className="offcanvas-header">
                    <h5 id="group-info-offcanvas">Explore More</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="bg-white" style={{height: '60%', overflowY: 'auto'}}>
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
