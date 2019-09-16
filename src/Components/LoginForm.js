import React from 'react';


export class LoginForm extends React.Component {
    render() {
        return (
            <div className="loginForm">

                <form>
                    <label htmlFor="username">Username<input type="text" id="username" name="username" />
                    </label>
                </form>

            </div>
        )
    }
}

export default LoginForm;