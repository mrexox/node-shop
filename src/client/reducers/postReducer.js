import { FETCH_POSTS, LIKE_POST } from '../actions/actionTypes';
//import { fetchPosts } from '../actions/postsActions'; // specify post actions

// state is an array of posts here
export default function posts(state=[], action) {
	switch (action.type) {
	case LIKE_POST:
		return state.map((post, index) => {
			if (post.id == action.id) {
				/* I have liked a post
				 * Post:  { .., likes: 15, ... }
				 * TODO What about sending an AJAX to a server?
				 */
				return Object.assign({}, post, {
					likes: post.likes+1
				});
			}
			return post;
		});
		case FETCH_POSTS:
			return state; // TODO tobe continued
	default:
		return state;
	}
}
