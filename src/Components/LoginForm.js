import React from 'react';
import { Link } from 'react-router-dom';

export class LoginForm extends React.Component {


    state = {
        email: '',
        password: '',


        errors: {
            email: false,
            password: false,
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

        if (this.state.password.length >= 5) {
            password = true;

        }

        if (email && password) {
            correct = true
        }

        return ({
            email,
            password,
            correct
        })


    }

    render() {
        return (

            <div className="container-login">

                <div id="loginbox"  >
                    <div className="panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">Sign In</div>
                            <div className="f-pass">Forgot password?</div>
                        </div>

                        <div className="panel-body">

                            <div id="login-alert" className="alert alert-danger col-sm-12"></div>


                            <form id="loginForm" className="form-horizontal" on Submit={this.handleSubmit} noValidate>

                                <div className="input-group">


                                    <label htmlFor="email">Email <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="email" />
                                        {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
                                    </label>
                                </div>

                                <div className="input-group">


                                    <label htmlFor="password">Password<input type="password" id="password" name="password" value={this.state.password} on Change={this.handleChange} placeholder="password" /> {this.state.errors.password && <span>{this.messages.password}</span>}

                                    </label>
                                </div>




                                <div className="form-group">
                                    {/* button */}

                                    <div className="col-sm-12 controls">
                                        <button>Login</button>
                                    </div>
                                </div>


                                <div className="form-group">
                                    <div className="col-md-12 control">
                                        <div className="form-account">
                                            <p className="web">Don't have an account? <Link to="/registrationform">Sign up here</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </form>



                        </div>
                    </div>
                </div>



            </div>






































        )
    }
}

export default LoginForm;