import configureStore from '../src/store/configureStore';
import { likePost } from '../src/actions/postsActions';

let store = configureStore({
	menu: 'HOME',
	posts: [{
		id: 1,
		likes: 0
	}]
});

const unsubscribe = store.subscribe(() =>
	console.log(store.getState())
);

// Must be liked
console.log("Liked post 1");
store.dispatch(likePost(1));
console.log("Liked post 1");
store.dispatch(likePost(1));
// Must not be liked
console.log("Liked post 2");
store.dispatch(likePost(2));

unsubscribe();
