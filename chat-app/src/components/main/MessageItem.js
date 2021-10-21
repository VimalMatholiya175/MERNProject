import React from 'react'

export default function MessageItem(props) {
  const { message } = props;

  const findTime = () => {
    let date = new Date(message.messageDate.toString());
    return date.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
  }

  return (
    <>
      <div className="d-block" id={message.messageText}>
        <div className="d-inline-block bg-white text-dark mt-2 ms-3 py-1 px-2" style={{ borderRadius: '7px', backgroundColor: 'rgb(237 239 255)' }}>
          <div className="d-flex justify-content-between">
            <small>
              {message.user.name}
            </small>
            <small className="ms-3" style={{ fontSize: '13px' }}>
              {findTime()}
            </small>
          </div>
          <span className="d-block" style={{maxWidth: '800px', wordWrap: 'break-word'}}>
            {message.messageText}
          </span>
        </div>
      </div>
    </>
  )
}
