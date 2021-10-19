import React from 'react'

export default function MessageItem(props) {
  const { message } = props;

  const findTime = () => {
    let date = new Date(message.messageDate.toString());
    return date.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
  }
  return (
    <>
      <div className="d-block">

        <div className="d-inline-block mt-2 px-2 ms-3 py-1" style={{borderRadius: '7px', color: 'black', backgroundColor: 'rgb(237 239 255)' }}>
          <div className="d-flex justify-content-between">

            <small style={{ color: 'rgb(47, 45, 82)',letterSpacing: '0.8px', fontWeight: 'bold' }}>
              {message.user.name}
            </small>
            <small className="ms-3" style={{ fontSize: '12px' }}>
              {findTime()}
            </small>
          </div>
          <span className="d-block">
            {message.messageText}
          </span>

        </div>
      </div>
    </>
  )
}
