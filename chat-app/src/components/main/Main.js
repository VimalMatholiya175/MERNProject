import React, { useContext } from 'react'
import GroupContext from '../../contexts/group/GroupContext'
import GroupHeader from './GroupHeader'
import Messages from './Messages'
import SendMessage from './SendMessage'

export default function Main() {
    
    const { currentGroup } = useContext(GroupContext);

    return (
        <>
            {currentGroup != null 
                ? 
                <div className="h-100" >
                    <GroupHeader />
                    <Messages />
                    <SendMessage />
                </div>
                : 
                <div className="h-100 d-flex justify-content-center align-items-center" style={{backgroundColor:"#dcdef7"}}>
                    <span className="p-1 text-white rounded-3" style={{backgroundColor:'#b9b9b9'}}>Select a Group to start Messaging</span>
                </div>
            }
        </>
    )
}
