import React, { Component} from 'react';
import { NavLink } from 'react-router-dom';
import { REGISTER } from '../Constants';
import '../styles/AuthForm.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        /**
         * generate LOGIN_EVENT
         */
        console.log("submit", event);
    }

    render() {
        return (
            <form className="auth">
                <fieldset>
                    <legend>Log in to shop</legend>
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
                

                    <input 
                        type="button"
                        value="Log in"
                        onClick={this.handleSubmit}
                        className="btn"
                        id="loginBtn"
                    />
                    <NavLink to={`/${REGISTER}`} >
                        <input
                            type="button"
                            value="Register"
                            className="btn"
                            id="signupBtn"
                        />
                    </NavLink>
                </fieldset>
            </form>
        );
    }
}

export default LoginPage;
