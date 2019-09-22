import React from 'react';

export class LoginForm extends React.Component {


    state = {
        email: '',
        password: '',
    }


    render() {
        return (
            <div className="container-for-login">

                <form className="loginForm">
                    <label htmlFor="email">Email<input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>

                    <label htmlFor="password">Password<input type="password" id="password" value={this.state.password} on Change={this.handleChange} /></label>
                </form>

            </div>
        )
    }
}

export default LoginForm;