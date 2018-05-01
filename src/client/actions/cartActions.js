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

export function cartSubmit(cartItems) {
    return (dispatch) => {
        dispatch({
            type: CART_SUBMIT
        });

        fetch(`http://${URL}:8080/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cartItems })
        })
        .then(res => {
            // handle res
            // call dispatch(cartSubmitSuccess(order_id)) or dispatch(cartSubmitError('error msg'))
        })
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

