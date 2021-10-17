import React, { useEffect, useState, useContext } from 'react'
import GroupContext from '../../contexts/GroupContext';
import GroupItem from './GroupItem';

export default function Groups() {

    const { groups, fetchAllGroups, setCurrentGroup, currentGroup } = useContext(GroupContext);
    useEffect(() => {
        fetchAllGroups();
    }, [])

    const handleOnClick = (group) => {
        if(currentGroup)
            document.getElementById(currentGroup._id).style.backgroundColor='#3c3a5f'
        setCurrentGroup(group);
        document.getElementById(group._id).style.backgroundColor='rgb(47, 45, 82)'
    }
    return (
        <>
            <div className="all-groups">
                {groups.map(group => {
                    return ( 
                    <span onClick={() => handleOnClick(group)}>
                        <GroupItem key={group._id} groupId={group._id} groupName={group.groupName} />
                    </span>)
                })}
            </div>
        </>
    )
}
