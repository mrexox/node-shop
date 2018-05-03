import fetch from 'cross-fetch';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SUBMIT, CART_SUBMIT_SUCCESS, CART_SUBMIT_ERROR } from './actionTypes';
import { URL } from '../Constants';
import { ReloginRequest } from './loginActions';

function cartAddItem(id) {
    return {
        type: CART_ADD_ITEM,
        payload: id
    };
}

export function cartRemoveItem(id) {
    return {
        type: CART_REMOVE_ITEM,
        payload: id
    };
}

export function cartSubmit(cartItems, token) {
    return (dispatch) => {
        if (!cartItems.length) dispatch(cartSubmitError('Can not submit empty cart.'));
        if (!token) dispatch(cartSubmitError('You should login, to submit order.'));
        else {
            dispatch({
                type: CART_SUBMIT
            });

            fetch(`http://${URL}:8080/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    items: cartItems,
                    token: token
                })
            })
            .then(res => {
                if (res.status >= 400) {
                    dispatch(cartSubmitError("Bad response from server, try again later."));
                }
                else {
                    res.json().then(json => {
                        if (json.status === 'success') {
                            dispatch(cartSubmitSuccess(json.order_id));
                        }
                        else {
                            dispatch(cartSubmitError(json.status));
                            if (json.status === 'Token not valid') {
                                dispatch(ReloginRequest(token));
                            }
                        }
                    });
                }
            });
        }
    };
}

function cartSubmitSuccess(order_id) {
    return {
        type: CART_SUBMIT_SUCCESS,
        payload: order_id
    };
}

function cartSubmitError(msg) {
    console.warn("CART_SUBMIT_ERROR", msg);
    return {
        type: CART_SUBMIT_ERROR,
        payload: msg
    };
}

