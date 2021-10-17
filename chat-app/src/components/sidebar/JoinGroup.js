import React,{useState,useContext,useRef} from 'react'
import GroupContext from '../../contexts/GroupContext';
import Modal from '../Modal';

export default function JoinGroup() {

    const { joinGroup } = useContext(GroupContext);
    const [groupCode, setGroupCode] = useState("");
    const closeBtnRef = useRef(null);

    const handleOnChange = (event) => {
        setGroupCode(event.target.value);
    }
    const handleOnClick = async (event) => {
        event.preventDefault();
        joinGroup(groupCode);
        setGroupCode("");
        closeBtnRef.current.click();

    }
    return (
        <>
            <Modal title="Join Group" id="join" closeBtnRef={closeBtnRef}>
                <div className="mb-3">
                    <label htmlFor="groupcode" className="form-label">Group Code</label>
                    <input type="text" className="form-control" value={groupCode} onChange={handleOnChange} id="groupcode" required minLength={6} maxLength={6}/>
                </div>
                <button type="button" className="btn btn-primary shadow-none" onClick={handleOnClick}>Join</button>
            </Modal>
        </>
    )
}
