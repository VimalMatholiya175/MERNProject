import React from 'react'
import Chats from './Chats'
import Groups from './Groups'

import './home.css';

export default function Home() {
    return (
        <>
            <div className="container-fluid" style={{height: '100vh'}}>
                <div className="row h-100">
                    <Groups />
                    <Chats/>
                </div>
            </div>
        </>
    )
}
