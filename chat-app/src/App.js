import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/">
            <Home/>
          </Route>
          <Route exact path="/signin">
            <SignIn/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
