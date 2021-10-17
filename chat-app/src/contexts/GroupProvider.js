import { useState } from "react";
import GroupContext from "./GroupContext";

export default function GroupProvider(props) {

    const [currentGroup,setCurrentGroup] = useState(null);
    const [groups, setGroups] = useState([]);

    const fetchAllGroups = async () => {
        let response = await fetch("http://localhost:4099/group/fetchAllGroups",
            {
                method: 'GET',
                headers: { 'authtoken': localStorage.getItem('authtoken') }
            }
        );
        response = await response.json();
        setGroups(response.groups);
    }

    const createGroup = async (groupName) => {
        let response = await fetch("http://localhost:4099/group/create",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'authtoken': localStorage.getItem('authtoken') },
                body: JSON.stringify({ groupName })
            }
        );
        response = await response.json();
        if(response.success){
            setGroups(groups.concat(response.group));
            setCurrentGroup(response.group);
        }
    }

    const joinGroup = async (groupCode) => {
        let response = await fetch("http://localhost:4099/group/join",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'authtoken': localStorage.getItem('authtoken') },
                body: JSON.stringify({ groupCode })
            }
        );
        response = await response.json();
        if(response.success){
            setGroups(groups.concat(response.group));
            setCurrentGroup(response.group);

        }
    }
    return (
        <GroupContext.Provider value={{ groups, fetchAllGroups, createGroup, joinGroup, setCurrentGroup, currentGroup}}>
            {props.children}
        </GroupContext.Provider>
    )
}
