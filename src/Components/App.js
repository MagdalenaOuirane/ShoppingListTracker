import React from 'react';
import './App.css';
import { RegistrationForm } from './RegistrationForm';
import './RegistrationForm.css';
import LoginForm from './LoginForm';
import './LoginForm.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>

          <Route path="/registrationform" component={RegistrationForm} />
          <Route path="/loginform" component={LoginForm} />

        </div>
      </Router>
    )

  }
}


export default App;
