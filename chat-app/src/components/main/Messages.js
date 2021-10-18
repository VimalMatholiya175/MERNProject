import React, { useContext, useEffect } from 'react'
import GroupContext from '../../contexts/GroupContext'
import MessageItem from './MessageItem';

export default function Messages() {

  const { messages, fetchMessages, currentGroup } = useContext(GroupContext);

  useEffect(() => {
    fetchMessages();

  }, [currentGroup, messages])

  return (
    <>
      <div style={{ height: '83%', backgroundColor: '#dcdef7' }}>
        {messages.map((message) =>{
          return <MessageItem message={message} />
        })}
      </div>
    </>
  )
}
