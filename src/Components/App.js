import React from 'react';
import './App.css';
import { RegistrationForm } from './RegistrationForm';
import './RegistrationForm.css';
import LoginForm from './LoginForm';
import './LoginForm.css';
import Notfound from './Notfound';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/registrationform" component={RegistrationForm} />
            <Route component={Notfound} />
          </Switch>

        </div>
      </Router>
    )

  }
}


export default App;
