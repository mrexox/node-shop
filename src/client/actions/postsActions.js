import { LIKE_POST } from './actionTypes';


export function fetchPosts() {
	throw new Error('Not implemented');
}

export function likePost(id) {
	return {type: LIKE_POST, id};
}
