import { connect } from 'react-redux';
import { likePost } from '../actions/postsActions';
import PostList from './PostList';

export const getFilteredPosts = (posts, filter) => {
	if (filter === '' || typeof filter === undefined) {
		return posts;
	}
	let tagRe = new RegExp(filter, 'i'); // ignoring case
	// Finds if any tag matches the filter, given in regexp
	posts.data = posts.data.filter((p) => (p.tags.find((tag) => tag.match(tagRe))));
	return posts;
}


const mapStateToProps = state => {
	return {
		posts: getFilteredPosts(state.posts, state.postFilter)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		likePost: id => {
			dispatch(likePost(id))
		}
	};
}

// I guess PostList may be used somewhere in an application
// That's why I need FilteredPostList only for a HomePage
const FilteredPostList = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostList);

export default FilteredPostList;
