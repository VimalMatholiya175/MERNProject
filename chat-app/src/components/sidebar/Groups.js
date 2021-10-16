import React, { useEffect, useState } from 'react'
import GroupItem from './GroupItem';

export default function Groups() {
    const [groups, setGroups] = useState([]);

    const fetchAllGroups = async () =>{
        let response = await fetch("http://localhost:4099/group/fetchAllGroups",
            {
                method: 'GET',
                headers: {'authtoken': localStorage.getItem('authtoken') }
            }
        );
        response = await response.json();
        setGroups(response.groups);
    }

    useEffect(() =>{
        fetchAllGroups();
    },[])

    return (
        <>
            <div className="all-groups">
                {groups.map(group =>{
                    return <GroupItem key={group._id} groupId={group._id} groupName={group.groupName} />
                })}
            </div>
        </>
    )
}
