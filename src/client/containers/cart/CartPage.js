import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cartSubmit, cartSubmitError, cartClear } from 'client/actions/cartActions';
import CartList from 'client/containers/cart/CartList';
import LoadingImage from 'client/img/Loading.gif';
import 'client/styles/Cart.css';

class CartPage extends Component {
	handleSubmit() {
		const { items, token, onError, onSubmit } = this.props;
		if (items.length === 0) onError('Can not submit empty cart.');
		else if (token === false) onError('You should login, to submit order.');
		else onSubmit(items, token);
	}
	clearCart() {
		this.props.onCartClear();
	}

	render() {
		const { items, isError, inProcess, errorMsg, isOrderCreated, order_id } = this.props;

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

					<CartList items={items}/>

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
		items: state.cart.items,
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
