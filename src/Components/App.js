import React from 'react';
import './App.css';
import { RegistrationForm } from './RegistrationForm';
import LoginForm from './LoginForm';

class App extends React.Component {
  render() {
    return (
      <div>

        <RegistrationForm />
        <LoginForm />

      </div>
    )
  }
}


export default App;
