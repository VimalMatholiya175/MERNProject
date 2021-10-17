import React from 'react'
import Main from './main/Main'
import SideBar from './sidebar/SideBar'
import GroupInfo from './groupinfo/GroupInfo';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import GroupProvider from '../contexts/GroupProvider';

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
                            <Router>
                                <Switch>
                                    <Route exact path="/">
                                        <Main />
                                    </Route>
                                    <Route exact path="/groupinfo">
                                        <GroupInfo />
                                    </Route>
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>
            </GroupProvider>
        </>
    )
}
