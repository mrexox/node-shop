import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cartSubmit } from '../actions/cartActions';

// page for test
class CartPage extends Component {
	render() {
		return (
			<input
				type="button"
				value="SUBMIT"
				onClick={this.props.onSubmit(this.props.cart, this.props.token)}
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
		errorMsg: state.cart.error.message,
		token: state.auth.token
    }),
    dispatch => ({
        onSubmit: bindActionCreators(cartSubmit, dispatch)
    })
)(CartPage);
