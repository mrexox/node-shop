import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MenuItem from '../components/MenuItem';
import { HOME, ABOUT, LOGIN_URL, LOGOUT_URL, CONTACT_US } from '../Constants';

import '../styles/Menu.css';


let Menu = (props) => {
    var lastMenuItem = props.isSigned ? LOGOUT_URL : LOGIN_URL;
    
    return (
        <div className="menu">

        <NavLink to={`/${HOME}`} >
            <MenuItem item={HOME} />
        </NavLink>

        <NavLink to={`/${ABOUT}`} >
            <MenuItem item={ABOUT} />
        </NavLink>


        <NavLink to={`/${CONTACT_US}`} >
            <MenuItem item={CONTACT_US} />
        </NavLink>

        <NavLink to={`/${lastMenuItem}`} >
            <MenuItem item={lastMenuItem} />
        </NavLink>

        </div>
    );
}

export default connect(
    state => ({
        isSigned: state.login.status === 'signed',
    })
)(Menu);
