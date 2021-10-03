import React from 'react'
import { Link } from 'react-router-dom'
import back from '../images/back.svg'
import edit from '../images/edit.svg'
import GroupMember from './GroupMember'

export default function GroupInfo() {
    return (
        <div id="group-info" className="h-100">
            <header className="d-flex align-items-center p-3 mb-4">
                <Link className="bg-transparent" to="/chat">
                    <img src={back} className="mx-1" />
                </Link>
                <h4 className="mx-2 my-auto">Explore More..</h4>
                {/* <!-- <button className="bg-transparent mx-2">
            <img src="images/edit.svg" className="mx-1"/>
        </button> --> */}
            </header>
            <div id="group-desc" className="bg-white p-3 m-4">
                <h4 className="mx-2">Description</h4>
                <p className="mx-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque delectus eius commodi quo obcaecati autem quod eum voluptate sequi porro saepe reiciendis molestias voluptatum quidem maxime voluptatibus non cum iure quibusdam, expedita officiis! Vel voluptatem magni atque. Laboriosam, nulla voluptatum.</p>
            </div>
            <div id="group-members" className="bg-white p-3 m-4">
                <div className="">
                    <h4 className="mx-2">Members</h4>
                </div>
                <GroupMember />

            </div>
        </div>


    )
}
