import React, { Component} from 'react';
import '../styles/AuthForm.css';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        /**
         * generate REGISTER_EVENT
         */
        console.log("submit", event);
    }

    render() {
        return (
            <form className="auth">
                <fieldset>
                    <legend>Register</legend>
                    <p>
                        <input
                            type="text"
                            placeholder="Username"
                            className="username"
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="Email"
                            className="email"
                        />
                    </p>
                    <p>
                        <input 
                            type="password"
                            placeholder="Password"
                            className="password"
                        />
                    </p>
                    <p>
                        <input 
                            type="password"
                            placeholder="Password confirmation"
                            className="password_confirmation"
                        />
                    </p>

                    <input 
                        type="button"
                        value="Register"
                        onClick={this.handleSubmit}
                        className="btn"
                        id="registerBtn"
                    />
                </fieldset>
            </form>
        );
    }
}

export default RegisterPage;
