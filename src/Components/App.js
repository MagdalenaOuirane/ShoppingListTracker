import React from 'react';
import './App.css';
import { RegistrationForm } from './RegistrationForm';
import './RegistrationForm.css';
import LoginForm from './LoginForm';
import './LoginForm.css';



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
