import React, { Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { REGISTER_URL } from '../Constants';
import { loginRequest } from '../actions/loginActions';
import LoadingImage from '../img/Loading.gif';
import '../styles/AuthForm.css';

class LoginPage extends Component {
    handleSubmit() {
        var data = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        if (this.validate(data)) {
            this.props.onLogin(data);
        }
    }

    validate() {
        // TODO: validation form
        return true;
    }

    handleEnterBtnClick(event) {
        if (event.key === 'Enter') {
            this.handleSubmit();
        }
    }

    render() {
        return (
            <form className="auth" onKeyDown={this.handleEnterBtnClick.bind(this)}>
                <fieldset>
                    <legend>Log in to shop</legend>
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
                            autoComplete="current-password"
                        />
                    </p>
                
                    <input 
                        type="button"
                        value="Log in"
                        onClick={this.handleSubmit.bind(this)}
                        className="btn"
                        id="loginBtn"
                        hidden={this.props.inProcess}
                    />
                    <button
                        className="btn wait_btn"
                        hidden={!this.props.inProcess}
                        disabled
                    ><img src={LoadingImage} alt="logining..."/></button>
                    <NavLink to={`/${REGISTER_URL}`} >
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

export default connect(
    state => ({
        inProcess: state.login.inProcess
    }),
    dispatch => ({
        onLogin: bindActionCreators(loginRequest, dispatch)
    })
)(LoginPage);
