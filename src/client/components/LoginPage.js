import React, { Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { REGISTER } from '../Constants';
import { LOGIN } from '../actions/actionTypes';
import LoadingImage from '../img/Loading.gif';
import '../styles/AuthForm.css';

class LoginPage extends Component {
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
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        if (this.validate(data)) {
            this.setState({ isSend: true });
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
            <form className="auth" onKeyDown={this.handleEnterBtnClick}>
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
                        onClick={this.handleSubmit}
                        className="btn"
                        id="loginBtn"
                        hidden={this.state.isSend}
                    />
                    <button
                        className="btn wait_btn"
                        hidden={!this.state.isSend}
                        disabled
                    ><img src={LoadingImage} alt="registration..."/></button>
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

export default connect(
    state => ({
        
    }),
    dispatch => ({
        onLogin: (payload) => {
            dispatch({ type: LOGIN, payload});
        }
    })
)(LoginPage);
