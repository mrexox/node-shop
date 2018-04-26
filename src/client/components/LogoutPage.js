import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { REDIRECT_AFTER_LOGOUT, LOGIN_URL } from '../Constants';
import { logout } from '../actions/loginActions';



const LogoutPage = ( props ) => {
    if (props.isSigned) {
        props.onLogout();
        return (        
            <Redirect to={{
                pathname: `/${REDIRECT_AFTER_LOGOUT}`
            }}/>
        );
    }
    else return (
        <Redirect to={{
            pathname: `/${LOGIN_URL}`
        }}/>
    );
}

export default connect(
    state => ({
        isSigned: state.login.status === 'signed',
    }),
    dispatch => ({
        onLogout: bindActionCreators(logout, dispatch)
    })
)(LogoutPage);
