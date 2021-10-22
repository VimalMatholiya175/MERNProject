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

 
    const handleOnEnter = (event) =>{
        if(event.key === 'Enter')
            handleOnClick();
    }


    return (
        <>
            <div className="d-flex align-items-center justify-content-between" style={{ height: '8%', backgroundColor: 'white' }}>
                <div className="d-flex">
                    <i className="fas fa-paperclip ms-4" style={{ color: 'gray' }}></i>
                    <i onClick={handleOnClick} className="far fa-paper-plane ms-4" style={{ color: 'green' }}></i>
                </div>
                <input id="mytxt" type="text" value={message} onChange={handleOnChange} onKeyDown={handleOnEnter} className="form-control message-input shadow-none mx-2" placeholder="Type a Message..." />
            </div>
        </>
    )
}
