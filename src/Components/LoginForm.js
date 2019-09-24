import React from 'react';


export class LoginForm extends React.Component {


    state = {
        email: '',
        password: '',


        errors: {
            email: 'false',
            password: 'false',
        }
    }

    messages = {
        email_incorrect: 'Lack of @ in email',
        password: 'Password has to have at least 5 characters',
    }


    handleChange = (e) => {
        console.log(e.target.type);
        console.log(e.target.name);

        const name = e.target.value;
        // downloading value  
        const type = e.target.type;
        const value = e.target.value;

        if (type === 'password' || type === 'email') {
            const value = e.target.value;

            this.setState({
                [name]: value
            })
        }
    }




    handleSubmit = (e) => {
        e.preventDefault()
        console.log('works');

        const validateData = this.formValidation()
        // function which is checking if validation is correct or not and returns us this information

        // console.log(validateData);


        if (validateData.correct) {
            //  if validation is correct by pressing button it returns me an object)

            this.setState({
                email: '',
                password: '',

                errors: {
                    email: false,
                    password: false,
                }
            })
            console.log("Form has been sent");
        } else {
            this.setState({
                errors: {
                    email: !validateData.email,
                    password: !validateData.password,
                }
            })
        }
    }

    formValidation = () => {
        let email = false;
        let password = false;
        let correct = false;
        //checks if all form is correct


        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }

        if (this.state.password.length === 5) {
            password = true;

        }

        if (email && password) {
            correct = true
        }

        return ({
            email,
            password,
        })


    }

    render() {
        return (
            <div className="container-for-login">

                <form className="loginForm" onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="email">Email<input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        {this.state.errors && <span>{this.messages.email_incorrect}</span>}
                    </label>

                    <label htmlFor="password">Password<input type="password" id="password" name="password" value={this.state.password} on Change={this.handleChange} /> {this.state.errors && <span>{this.messages.password}</span>}
                    </label>


                    <button>Sign in</button>

                    <p className="password">Forgot password?</p>

                    <p className="web">New to this website? Join now</p>
                </form>

            </div>
        )
    }
}

export default LoginForm;