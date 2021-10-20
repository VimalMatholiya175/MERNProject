import React, { useState, useContext } from 'react'
import GroupContext from '../../contexts/group/GroupContext';

export default function SendMessage() {

    const { sendMessage } = useContext(GroupContext);
    const [message, setMessage] = useState('');

    const handleOnChange = (event) => {
        setMessage(event.target.value);
    }

    const handleOnClick = async () => {
        await sendMessage(message);
        setMessage("");
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-between" style={{ height: '8%', backgroundColor: 'white' }}>
                <textarea type="text" value={message} onChange={handleOnChange} className="form-control shadow-none mx-3" placeholder="Type a Message..." />
                <div className="d-flex">
                    <i onClick={handleOnClick} className="far fa-paper-plane me-4" style={{ fontSize: '21px', color: 'green' }}></i>
                    <i className="fas fa-paperclip me-4" style={{ fontSize: '21px', color: 'gray' }}></i>
                </div>
            </div>
        </>
    )
}
