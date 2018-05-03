import fetch from 'cross-fetch';
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SUBMIT, CART_SUBMIT_SUCCESS, CART_SUBMIT_ERROR } from './actionTypes';
import { URL } from '../Constants';

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

// not work - need debug
export function cartSubmit(cartItems) {
    return (dispatch) => {
        if (cartItems.length) {
            dispatch({
                type: CART_SUBMIT
            });
        }
        else dispatch(cartSubmitError('Can not submit empty cart.'))

        fetch(`http://${URL}:8080/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cartItems })
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
                    else dispatch(cartSubmitError(json.status));
                });
            }
        });
    };
}

function cartSubmitSuccess(order_id) {
    return {
        type: CART_SUBMIT_SUCCESS,
        payload: order_id
    };
}

function cartSubmitError(msg) {
    return {
        type: CART_SUBMIT_ERROR,
        payload: msg
    };
}

