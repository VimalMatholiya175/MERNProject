import { useState } from "react";
import GroupContext from "./GroupContext";

export default function GroupProvider(props) {

    const [currentGroup, setCurrentGroup] = useState(null);
    const [groups, setGroups] = useState([]);
    const [messages, setMessages] = useState([]);

    const fetchAllGroups = async () => {
        let response = await fetch("http://localhost:4099/group/fetchAllGroups",
            {
                method: 'GET',
                headers: { 'authtoken': localStorage.getItem('authtoken') }
            }
        );
        response = await response.json();
        if (response.success) {
            setGroups(response.groups);
        }
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
        if (response.success) {
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
        if (response.success) {
            let groupExists = groups.find((g) => g._id === response.group._id);
            if(!groupExists){
                setGroups(groups.concat(response.group));
            }
            setCurrentGroup(response.group);
        }
    }

    const sendMessage = async (message) => {
        let response = await fetch("http://localhost:4099/message/sendMessage",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'authtoken': localStorage.getItem('authtoken') },
                body: JSON.stringify({ message, groupId: currentGroup._id })
            }
        );
        response = await response.json();
        if (response.success) {
            const date = new Date(response.message[0].messageDate.toString());
            if(messages.length === 0){
               setMessages([{
                   date: {
                       day: date.getDate(),
                       month: date.getMonth() + 1,
                       year: date.getFullYear() 
                   },
                   messageList: response.message
               }]);
            }
            else{
                let newMessages = JSON.parse(JSON.stringify(messages));
                for(let item of newMessages){
                    if(item.date.day === date.getDate() 
                    && item.date.month === date.getMonth() + 1 
                    && item.date.year === date.getFullYear())
                    {
                        item.messageList = item.messageList.concat(response.message[0]);
                    }
                }
                setMessages(newMessages);
            }
        }
    }

    const fetchMessages = async () => {
        let response = await fetch(`http://localhost:4099/message/fetchMessages/${currentGroup._id}`,
            {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'authtoken': localStorage.getItem('authtoken') },
            }
        );
        response = await response.json();
        if (response.success) {
            setMessages(response.messages);
        }
    }

    return (
        <GroupContext.Provider value={{ groups, fetchAllGroups, createGroup, joinGroup, setCurrentGroup, currentGroup, messages, sendMessage, fetchMessages }}>
            {props.children}
        </GroupContext.Provider>
    )
}
