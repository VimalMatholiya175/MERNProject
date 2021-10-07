import React from 'react'
import { Link } from 'react-router-dom'
import back from '../../images/back.svg'
// import edit from '../images/edit.svg'
import GroupMember from './GroupMember'

export default function GroupInfo() {
    return (
        <div className="h-100 group-info">
            <header className="d-flex align-items-center p-3 mb-4">
                <Link className="bg-transparent" to="/">
                    <img src={back} className="mx-1" />
                </Link>
                <h4 className="mx-2 my-auto">Explore More..</h4>
                {/* <!-- <button className="bg-transparent mx-2">
                        <img src="images/edit.svg" className="mx-1"/>
                    </button> --> */}
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
