
import './App.css';
import { Login } from './components/Login';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { List } from './components/List';

function App() {
  return (
    <>
    <Router>
    <div>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <List/>
      </Route>
    </div>
  </Router>,
  </>
  );
}

export default App;
