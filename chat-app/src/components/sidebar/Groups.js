import React, { useEffect, useContext } from 'react'
import GroupContext from '../../contexts/group/GroupContext';
import GroupItem from './GroupItem';

export default function Groups() {

    const { groups, fetchAllGroups, setCurrentGroup } = useContext(GroupContext);
    
    useEffect(() => {
        fetchAllGroups();
         // eslint-disable-next-line
    }, [])

    const handleOnClick = (group) => {
        setCurrentGroup(group);
    }

    return (
        <>
            <div className="all-groups">
                {groups.map(group => {
                    return ( 
                    <span onClick={() => handleOnClick(group)} key={group._id}>
                        <GroupItem groupId={group._id} groupName={group.groupName} />
                    </span>)
                })}
            </div>
        </>
    )
}
