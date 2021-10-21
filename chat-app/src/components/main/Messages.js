import React, { useContext, useEffect, useRef } from 'react'
import GroupContext from '../../contexts/group/GroupContext'
import MessageItem from './MessageItem';

export default function Messages() {

  const { messages, fetchMessages, currentGroup } = useContext(GroupContext);
  const messageList = useRef(null);

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
        
        {messages.map((message) => 
          <MessageItem key={message._id} message={message} />
        )}
        
        <div style={{backgroundColor: '#dcdef7', height:'5px'}}></div>
      </div>
    </>
  )
}
