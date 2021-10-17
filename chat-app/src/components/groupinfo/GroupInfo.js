import React from 'react'
import { Link } from 'react-router-dom'
import back from '../../images/back.svg'
import GroupMember from './GroupMember'

export default function GroupInfo() {
    return (
        <div className="h-100" style={{backgroundColor: '#dcdef7'}}>
            <header className="d-flex align-items-center p-3 mb-4" style={{backgroundColor: '#5c5a8c'}}>
                <Link className="bg-transparent" to="/">
                    {/* <img src={back} className="mx-1" /> */}
                </Link>
                <h4 className="mx-2 my-auto">Explore More..</h4>
            </header>
            <div className="bg-white p-3 m-4 group-members">
                <div className="">
                    <h4 className="mx-2">Members</h4>
                </div>
                <GroupMember />
            </div>
        </div>

    )
}
