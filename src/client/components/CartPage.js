import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { LOGIN_URL } from '../Constants';
import { cartSubmit } from '../actions/cartActions';

// page for test
class CartPage extends Component {
	handleSubmit() {
		//check if user signed in
		this.props.onSubmit(this.props.cart);
	}

	render() {
		return (
			<input 
				type="button"
				value="SUBMIT"
				onClick={this.handleSubmit.bind(this)}
				className="btn"
				id="loginBtn"
			/>
		);
	}
}

export default connect(
    state => ({
		cart: state.cart.items,
        inProcess: state.cart.status === 'request',
        isError: state.cart.status === 'error',
		errorMsg: state.cart.error.message
    }),
    dispatch => ({
        onSubmit: bindActionCreators(cartSubmit, dispatch)
    })
)(CartPage);