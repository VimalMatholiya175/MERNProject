import React from 'react'
import Main from './main/Main'
import SideBar from './sidebar/SideBar'
import { useHistory } from "react-router-dom";
import GroupProvider from '../contexts/group/GroupProvider';

export default function Home() {

    let location = useHistory();
    if (!localStorage.getItem('authtoken')) {
        location.push('/signin');
    }
    return (
        <>
            <GroupProvider>
                <div className="container-fluid" style={{ height: '100vh' }}>
                    <div className="row h-100">
                        <div className="col-3 bg-white p-0 h-100">
                            <SideBar />
                        </div>
                        <div className="col-9 p-0 h-100">
                            <Main />
                        </div>
                    </div>
                </div>
            </GroupProvider>
        </>
    )
}
