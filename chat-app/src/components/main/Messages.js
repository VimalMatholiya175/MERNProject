import React, { useContext, useEffect, useRef } from 'react'
import GroupContext from '../../contexts/group/GroupContext'
import MessageItem from './MessageItem';

export default function Messages() {

  const { messages, fetchMessages, currentGroup } = useContext(GroupContext);
  const messageList = useRef(null);

  const formatDate = (dateObj) => {
    let date = new Date(dateObj.year, dateObj.month - 1, dateObj.day);
    if (date.toDateString() === new Date().toDateString()) {
      return 'Today';
    }
    return date.toLocaleDateString('en-us', { month: "long", day: "numeric" });
  }

  const scrollToBottom = () => {
    const scrollHeight = messageList.current.scrollHeight;
    const height = messageList.current.clientHeight;
    const maxScrollTop = scrollHeight - height;
    messageList.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  useEffect(() => {

    fetchMessages();
    scrollToBottom();

  }, [currentGroup])

  return (
    <>
      <div ref={messageList} style={{ height: '83%', backgroundColor: '#dcdef7', overflowY: 'auto' }}>

        {messages.length !== 0
          ?
          messages.map((item) =>
            <div key={item.messageList[0]._id}>
              <small className="d-flex justify-content-center my-1">
                <span className="text-white p-1 rounded-3" style={{ backgroundColor: 'rgb(47, 45, 82)' }}>
                  {formatDate(item.date)}
                </span>
              </small>
              {item.messageList.map((message) =>
                <MessageItem key={message._id} message={message} />
              )}
            </div>
          )
          :
          <div className="h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#dcdef7" }}>
            <span className="p-1 text-white rounded-3" style={{ backgroundColor: '#b9b9b9' }}>No messages</span>
          </div>}

        <div style={{ backgroundColor: '#dcdef7', height: '5px' }}></div>
      </div>
    </>
  )
}
