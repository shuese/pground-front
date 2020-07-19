import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import GlobalStyle from './GlobalStyles';
import Text from './components/TestComponent';
import Counter from './components/TestComponent2';
import logo from './assets/logo192.png'

const App: React.SFC = () => {
  return (
    <>
      <img src={logo} />
      <Counter />
      <Counter initValue={3} />
      <GlobalStyle />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">counter</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/">
            <Text message="kek" color="red" />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
