import React, { useState , useContext } from 'react'
import GroupContext from '../../contexts/GroupContext';

export default function SendMessage() {

    const { sendMessage } = useContext(GroupContext);
    const [message, setMessage] = useState('');

    const handleOnChange = (event) =>{
        setMessage(event.target.value);
    }

    const handleOnClick = async () =>{
        sendMessage(message);
        setMessage("");
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-between" style={{height: '8%', backgroundColor: 'white'}}>
                <input type="text" value={message} onChange={handleOnChange} className="form-control shadow-none bg-transparent mx-1" placeholder="Type a Message..." />
                <div className="d-flex">
                    <i onClick={handleOnClick} className="fa fa-send-o mx-3" style={{ fontSize: '21px', color: 'green' }}></i>
                    <i className="fa fa-paperclip mx-3" style={{ fontSize: '21px', color: 'darkgrey' }}></i>
                </div>
            </div>
        </>
    )
}
