import React from 'react'
import Main from './Main'
import Groups from './Groups'

export default function Home() {
    return (
        <>
            <div className="container-fluid" style={{height: '100vh'}}>
                <div className="row h-100">
                    <Groups />
                    <Main/>
                </div>
            </div>
        </>
    )
}
