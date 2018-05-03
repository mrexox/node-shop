import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cartSubmit, cartSubmitError, cartClear } from '../actions/cartActions';
import LoadingImage from '../img/Loading.gif';
import '../styles/Cart.css';

class CartPage extends Component {
	handleSubmit() {
		const { cart, token, onError, onSubmit } = this.props;
		if (cart.length === 0) onError('Can not submit empty cart.');
		else if (token === false) onError('You should login, to submit order.');
		else onSubmit(cart, token);
	}
	clearCart() {
		this.props.onCartClear();
	}

	render() {
		const { isError, inProcess, errorMsg, isOrderCreated, order_id } = this.props;

		return (
			<div className="cart_wrapper">
				<div className="cart_ordered" hidden={!isOrderCreated}>
					<h1>Your order is decorated!</h1>
					<p>Your order number: {order_id}</p>
					<input
						type="button"
						value="START A NEW ORDER"
						onClick={this.clearCart.bind(this)}
						className="btn"
						id="newOrderBtn"
					/>    
				</div>
					
				<div className="cart_preorder" hidden={isOrderCreated}>
					<div className="cart">
						// CART ELEMENTS
					</div>
					<div className="error" hidden={!isError}>
						{errorMsg}
					</div>
					<input
						type="button"
						value="CONFIRM THE ORDER"
						onClick={this.handleSubmit.bind(this)}
						className="btn"
						id="submitBtn"
						hidden={inProcess}
					/>                    
					<button
						className="btn wait_btn"
						hidden={!inProcess}
						disabled
					><img src={LoadingImage} alt="sending..."/></button>
				</div>
			</div>
		);
	}
}

export default connect(
    state => ({
		cart: state.cart.items,
		inProcess: state.cart.status === 'request',
		isOrderCreated: state.cart.status === 'order',
		isError: state.cart.status === 'error',
		errorMsg: state.cart.error.message,
		token: state.auth.token,
		order_id: state.cart.order_id
    }),
    dispatch => ({
		onSubmit: bindActionCreators(cartSubmit, dispatch),
		onError: (msg) => dispatch(cartSubmitError(msg)),
		onCartClear: () => dispatch(cartClear())
    })
)(CartPage);
