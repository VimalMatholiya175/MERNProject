import React, { useContext } from 'react'
import GroupMember from './GroupMember'
import GroupContext from '../../contexts/group/GroupContext'

export default function GroupInfo() {
    const { currentGroup } = useContext(GroupContext);
    const { members } = currentGroup;

    return (
        <>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="group-info" aria-labelledby="group-info-offcanvas">
                <div className="offcanvas-header">
                    <h3 id="group-info-offcanvas">Group info</h3><br/>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="bg-white" style={{ height: '60%', overflowY: 'auto' }}>
                        <div className="">
                            <h6 className="mx-2">Members</h6>
                        </div>
                        {members.map((member) =>
                            <GroupMember key={member._id} id={member._id} name={member.name} />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
