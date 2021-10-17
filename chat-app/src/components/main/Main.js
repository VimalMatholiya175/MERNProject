import React, { useContext } from 'react'
import GroupContext from '../../contexts/GroupContext'
import GroupHeader from './GroupHeader'
import Messages from './Messages'
import SendMessage from './SendMessage'

export default function Main() {
    const { currentGroup } = useContext(GroupContext);

    return (
        <>
            {currentGroup != null && <div className="h-100" >
                <GroupHeader/>
                <Messages/>
                <SendMessage/>
            </div>
            }
        </>
    )
}
