import React, { useContext } from 'react'
import MemberItem from './MemberItem'
import GroupContext from '../../contexts/group/GroupContext'

export default function Members() {

    const { currentGroup } = useContext(GroupContext);
    const { members } = currentGroup;

    return (
        <>
            <h6 className="text-light rounded-3 p-2" style={{ backgroundColor: '#2f2d52'}}>Members<span className="mx-1">({members.length})</span></h6>
            {members.map((member) =>
                <MemberItem key={member._id} id={member._id} name={member.name} />
            )}
        </>
    )
}
