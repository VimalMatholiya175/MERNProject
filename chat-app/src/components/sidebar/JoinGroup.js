import React,{useState} from 'react'
import Modal from '../Modal';

export default function JoinGroup() {
    const [groupCode, setGroupCode] = useState("");

    const handleOnChange = (event) => {
        setGroupCode(event.target.value);
    }
    const handleOnClick = async (event) => {
        event.preventDefault();
        let response = await fetch("http://localhost:4099/group/join",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'authtoken': localStorage.getItem('authtoken') },
                body: JSON.stringify({ groupCode })
            }
        );
        response = await response.json();
        setGroupCode("");
    }
    return (
        <>
            <Modal title="Join Group" id="Join">
                <div className="mb-3">
                    <label htmlFor="groupcode" className="form-label">Group Code</label>
                    <input type="text" className="form-control" value={groupCode} onChange={handleOnChange} id="groupcode" required minLength={6} maxLength={6}/>
                </div>
                <button type="button" className="btn btn-primary shadow-none" onClick={handleOnClick}>Join</button>
            </Modal>
        </>
    )
}
