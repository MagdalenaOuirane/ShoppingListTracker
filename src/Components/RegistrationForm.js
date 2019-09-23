import React from 'react';


export class RegistrationForm extends React.Component {

    state = {
        username: '',
        email: '',
        lastname: '',
        pass: '',


        errors: {
            username: 'false',
            //  there are no mistakes in validation if its false 
            email: 'false',
            lastname: 'false',
            pass: 'false',
        }
    }
    // Validation
    messages = {
        username_incorrect: 'Name must be longer than 3 characters and it cant have space',
        lastname_incorrect: 'Last Name must be longer than 2 characters and it cant have space',
        email_incorrect: 'Lack of @ in email',
        password: 'Password has to have at least 5 characters',

    }




    handleChange = (e) => {
        console.log(e.target.type);
        console.log(e.target.name);

        const name = e.target.name;
        const type = e.target.type;



        if (type === "text" || type === "password" || type === "email") {


            const value = e.target.value;

            this.setState({
                [name]: value
            })
        }
    }





    handleSubmit = (e) => {
        e.preventDefault()
        console.log("It's working");

        const validation = this.formValidation()
        // console.log(validation);


        if (validation.correct) {

            this.setState({
                username: '',
                email: '',
                lastname: '',
                pass: '',


                errors: {
                    username: false,
                    email: false,
                    lastname: false,
                    pass: false,
                }
            })
            console.log("Form has been sent");
        } else {
            this.setState({
                errors: {
                    username: !validation.username,
                    email: !validation.email,
                    lastname: !validation.lastname,
                    pass: !validation.password,

                }
            })
        }
    }

    formValidation = () => {
        //true - ok
        //false - wrong
        let username = false;
        let lastname = false;
        let email = false;
        let password = false;
        let correct = false;

        if (this.state.username.length > 10 &&
            this.state.username.indexOf(' ') === -1) { // if there is not space return -1
            username = true;
        }

        if (this.state.lastname.length > 10 &&
            this.state.lastname.indexOf(' ') === -1) {
            lastname = true;
        }

        if (this.state.email.indexOf('@') !== -1) {
            email = true;
        }

        if (this.state.pass.length === 8) {
            password = true;
        }

        if (username && lastname && email && password) {
            correct = true
        }

        return ({
            username,
            lastname,
            email,
            password,
            correct
        })
    }

    render() {
        return (
            <div className="app">
                <form className="myForm" onSubmit={this.handleSubmit} noValidate >
                    <p className="registration-form">Registration Form</p>
                    <label htmlFor="user">First name<input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
                        {/* checking fields if are correct or not */}
                        {this.state.errors && <span>{this.messages.username_incorrect}</span>}
                    </label>

                    <label htmlFor="lastname">Last name<input type="text" id="lastname" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                        {this.state.errors && <span>{this.messages.lastname_incorrect}</span>}
                    </label>


                    <label htmlFor="email">Email<input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        {this.state.errors && <span>{this.messages.email_incorrect}</span>}
                    </label>

                    <label htmlFor="password">Password<input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange} />
                        {this.state.errors && <span>{this.messages.password}</span>}


                    </label>

                    <p className="text">You agree to the website User Agreement, Privacy policy and Cookie policy</p>


                    <button>AGREE & JOIN</button>
                    <p className="sign-in-link">Already on this page? Sign in</p>

                </form>

            </div>
        );
    }
}



export default RegistrationForm;