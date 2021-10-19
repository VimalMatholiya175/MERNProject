import React from 'react'
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from './contexts/user/UserProvider';

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
