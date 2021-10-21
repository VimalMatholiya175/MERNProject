import React, { useContext, useEffect } from 'react'
import Main from './main/Main'
import { useHistory } from "react-router-dom";
import GroupProvider from '../contexts/group/GroupProvider';
import UserContext from '../contexts/user/UserContext';
import NavBar from './sidebar/NavBar';
import Search from './sidebar/Search';
import Groups from './sidebar/Groups';

export default function Home() {

    const { fetchUser } = useContext(UserContext);
    const location = useHistory();

    if (!localStorage.getItem('authtoken')) {
        location.push('/signin');
    }

    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <GroupProvider>
                <div className="container-fluid vh-100">
                    <div className="row h-100">
                        <div className="col-3 bg-white p-0 h-100">
                            <NavBar />
                            <Search />
                            <Groups />
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
