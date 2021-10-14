import './App.css';
import SignIn from './components/account/SignIn';
import SignUp from './components/account/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
