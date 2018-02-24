import assert from 'assert';
import configureStore from '../src/store/configureStore';
import { likePost } from '../src/actions/postsActions';

let store = configureStore({
	menu: 'HOME',
	posts: [{
		id: 1,
		likes: 0
	}]
});


describe('Testing likes', () => {
	it('Must be liked', () => {
		store.dispatch(likePost(1));
		assert.equal(store.getState().posts[0].likes, 1);
		store.dispatch(likePost(1));
		assert.equal(store.getState().posts[0].likes, 2);
	});
	it('Must not be liked', () => {
		store.dispatch(likePost(2));
		assert.equal(store.getState().posts[0].likes, 2);
	})
});

