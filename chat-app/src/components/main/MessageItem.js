import React, { useContext } from 'react'
import UserContext from '../../contexts/user/UserContext'

export default function MessageItem(props) {

  const {user} = useContext(UserContext);
  const { message } = props;

  const formatTime = () => {
    let date = new Date(message.messageDate.toString());
    return date.toLocaleTimeString('en-us', { hour: '2-digit', minute: "2-digit" });
  }

  return (
    <>
      <div className="d-block">
        <div className="d-inline-block bg-white rounded-3 mt-2 ms-3 py-1 px-2">
          <div className="d-flex justify-content-between align-items-center">
            <small style={{ color: 'rgb(47, 45, 82)' }}>
              {user.name === message.user[0].name ? 'You' : message.user[0].name}
            </small>
            <small className="ms-3" style={{ fontSize: '13px' }}>
              {formatTime()}
            </small>
          </div>
          <span className="d-block" style={{ maxWidth: '800px', wordWrap: 'break-word' }}>
            {message.messageText}
          </span>
        </div>
      </div>
    </>
  )
}
