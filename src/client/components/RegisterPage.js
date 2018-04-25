import React, { Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { registerRequest } from '../actions/registerActions';
import LoadingImage from '../img/Loading.gif';
import '../styles/AuthForm.css';

class RegisterPage extends Component {
    handleSubmit() {
        var data = {
            user_name: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }   
        if (this.validate(data)) {
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
            <form className="auth" onKeyDown={this.handleEnterBtnClick.bind(this)}>
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
                        onClick={this.handleSubmit.bind(this)}
                        className="btn"
                        hidden={this.props.inProcess}
                    />
                    <button
                        className="btn wait_btn"
                        hidden={!this.props.inProcess}
                        disabled
                    ><img src={LoadingImage} alt="registration..."/></button>
                </fieldset>
            </form>
        );
    }
}

export default connect(
    state => ({
        inProcess: state.register.inProcess
    }),
    dispatch => ({
        onRegister: bindActionCreators(registerRequest, dispatch)
    })
)(RegisterPage);
