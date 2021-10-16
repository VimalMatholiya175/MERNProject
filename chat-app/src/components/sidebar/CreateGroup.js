import React,{useState} from 'react'
import Modal from '../Modal';

export default function CreateGroup() {
    const [groupName, setGroupName] = useState("");
    const handleOnChange = (event) => {
        setGroupName(event.target.value);
    }
    const handleOnClick = async (event) => {
        event.preventDefault();
        let response = await fetch("http://localhost:4099/group/create",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'authtoken': localStorage.getItem('authtoken') },
                body: JSON.stringify({ groupName })
            }
        );
        response = await response.json();
        setGroupName("");
    }
    return (
        <>
            <Modal title="Create Group" id="create">
                <div className="mb-3">
                    <label htmlFor="groupname" className="form-label">Group Name</label>
                    <input type="text" className="form-control" value={groupName} onChange={handleOnChange} id="groupname" required minLength={3} maxLength={20}/>
                </div>
                <button type="button" className="btn btn-primary shadow-none" onClick={handleOnClick}>Create</button>
            </Modal>
        </>
    )
}
