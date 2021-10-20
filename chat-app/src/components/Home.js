import React ,{useContext, useEffect}from 'react'
import Main from './main/Main'
import SideBar from './sidebar/SideBar'
import { useHistory } from "react-router-dom";
import GroupProvider from '../contexts/group/GroupProvider';
import UserContext from '../contexts/user/UserContext';

export default function Home() {

    const {fetchUser} = useContext(UserContext);
    const location = useHistory();

    if (!localStorage.getItem('authtoken')) {
        location.push('/signin');
    }
    
    useEffect(() => {
        fetchUser();
    },[])

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
