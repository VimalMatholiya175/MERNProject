import React, { useContext } from 'react'
import MemberItem from './MemberItem'
import GroupContext from '../../contexts/group/GroupContext'

export default function Members() {

    const { currentGroup } = useContext(GroupContext);
    const { members } = currentGroup;

    return (
        <div className="bg-white" style={{ height: '60%', overflowY: 'auto' }}>
            <h5 className="mx-3 text-primary">Members</h5>
            {members.map((member) =>
                <MemberItem key={member._id} id={member._id} name={member.name} />
            )}
        </div>
    )
}
