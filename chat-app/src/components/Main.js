import React from 'react'
import GroupChat from './GroupChat'
import GroupInfo from './GroupInfo'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Main() {
    return (
        <>
            <Router>
                <div className="col-9 p-0 h-100">
                    <Switch>
                        <Route exact path="/chat">
                            <GroupChat />
                        </Route>
                        <Route exact path="/groupinfo">
                            <GroupInfo />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </>
    )
}
