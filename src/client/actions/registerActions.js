import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from './actionTypes';

export const registerRequest = (data) => {
    return {
        type: REGISTER_REQUEST,
        payload: data
    }
}