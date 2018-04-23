import React, { Component} from 'react';
import { connect } from 'react-redux';
import { REGISTER } from '../actions/actionTypes';
import LoadingImage from '../img/Loading.gif';
import '../styles/AuthForm.css';


class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSend: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEnterBtnClick = this.handleEnterBtnClick.bind(this);
    }

    handleSubmit() {
        var data = {
            user_name: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        if (this.validate(data)) {
            this.setState({ isSend: true });
            this.props.onRegister(data);
        }
    }

    handleEnterBtnClick(event) {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }

    validate(data) {
        // TODO: validation form
        return true;
    }

    render() {
        return (
            <form className="auth" onKeyDown={this.handleEnterBtnClick}>
                <fieldset>
                    <legend>Register</legend>
                    <p>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            className="username"
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            className="email"
                            autoComplete="email"
                        />
                    </p>
                    <p>
                        <input 
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="password"
                            autoComplete="new-password"
                        />
                    </p>
                    <p>
                        <input 
                            type="password"
                            id="password_confirmation"
                            placeholder="Password confirmation"
                            className="password_confirmation"
                            autoComplete="new-password"
                        />
                    </p>

                    <input 
                        type="button"
                        value="Register"
                        onClick={this.handleSubmit}
                        className="btn"
                        hidden={this.state.isSend}
                    />
                    <button
                        className="btn wait_btn"
                        hidden={!this.state.isSend}
                        disabled
                    ><img src={LoadingImage} alt="registration..."/></button>
                </fieldset>
            </form>
        );
    }
}

export default connect(
    state => ({
        
    }),
    dispatch => ({
        onRegister: (payload) => {
            dispatch({ type: REGISTER, payload});
        }
    })
)(RegisterPage);
