import React from 'react';


export class RegistrationForm extends React.Component {

    state = {
        username: '',
        email: '',
        lastname: '',
        pass: '',
        accept: 'false',

        errors: {
            username: 'true',
            //  nie ma błędów w walidacji gdy jest false
            email: 'true',
            lastname: 'true',
            pass: 'false',
            accept: 'false',

        }

    }
    // Validation
    messages = {
        username_incorrect: 'Name must be longer than 3 characters and it cant have space',
        lastname_incorrect: 'Last Name must be longer than 2 characters and it cant have space',
        email_incorrect: 'Lack of @ in email',
        password: 'Password has to have at least 8 characters',
        accept_incorrect: 'Agreement is not confirmed'
    }




    handleChange = (e) => {
        console.log(e.target.type);
        console.log(e.target.name);

        const name = e.target.name;
        const type = e.target.type;



        if (type === "text" || type === "password" || type === "email") {
            const value = e.target.value;
            console.log("type");

            this.setState({
                [name]: value
            })
        } else if (type === "checkbox") {
            const checked = e.target.checked;
            console.log(checked);
            this.setState({
                [name]: checked
            })



        }
    }
    // console.log("type");

    // const checked = e.target.checked;


    handleSubmit = (e) => {
        e.preventDefault()
        console.log("działa");
    }


    render() {
        return (
            <div className="app">
                <form onSubmit={this.handleSubmit} noValidate>

                    <label htmlFor="user">First name<input type="text" id="user" name="username" value={this.state.username} onChange={this.handleChange} />
                        {/* checking fields if are correct or not */}
                        {this.state.errors && <span>{this.messages.username_incorrect}</span>}
                    </label>

                    <label htmlFor="lastname">Last name<input type="text" id="lastname" name="lastname" value={this.state.name} onChange={this.handleChange} />
                        {this.state.errors && <span>{this.messages.lastname_incorrect}</span>}
                    </label>


                    <label htmlFor="email">Email<input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        {this.state.errors && <span>{this.messages.email_incorrect}</span>}
                    </label>

                    <label htmlFor="password">Password<input type="password" id="paswords" name="pass" value={this.state.pass} onChange={this.handleChange} />
                        {this.state.errors && <span>{this.messages.password}</span>}


                    </label>

                    <label htmlFor="accept"><input type="checkbox" id="accept" name="accept" checked={this.state.accept} onChange={this.handleChange} />You agree to the website User Agreement,Privacy Policy and Cookie policy</label>


                    <button >JOIN</button>

                </form>

            </div>
        );
    }
}



export default RegistrationForm;