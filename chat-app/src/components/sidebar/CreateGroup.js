import React, { useState, useContext, useRef } from 'react'
import GroupContext from '../../contexts/group/GroupContext';
import Modal from '../Modal';

export default function CreateGroup() {

    const { createGroup } = useContext(GroupContext);
    const [groupName, setGroupName] = useState("");
    const closeBtnRef = useRef(null);

    const handleOnChange = (event) => {
        setGroupName(event.target.value);
    }
    const handleOnClick = async (event) => {
        event.preventDefault();
        await createGroup(groupName);
        setGroupName("");
        closeBtnRef.current.click();
    }
    return (
        <>
            <Modal title="Create Group" id="create" closeBtnRef={closeBtnRef}>
                <div className="mb-3">
                    <label htmlFor="groupname" className="form-label">Group Name</label>
                    <input type="text" className="form-control" value={groupName} onChange={handleOnChange} id="groupname" required/>
                    <small className="mt-2 text-muted">Group name must 3 to 20 character long</small>
                </div>
                <button type="button" disabled={groupName.length < 3 || groupName.length >20 } className="btn btn-primary shadow-none" onClick={handleOnClick}>Create</button>
            </Modal>
        </>
    )
}
