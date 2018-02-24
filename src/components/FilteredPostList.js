import { connect } from 'react-redux';
import { likePost } from '../actions/postsActions';
import PostList from './PostList';

export const getFilteredPosts = (posts, filter) => {
	if (filter === '' || typeof filter === undefined) {
		return posts;
	}
	let tagRe = new RegExp(filter, 'i'); // ignoring case
	// Finds if any tag matches the filter, given in regexp
	return posts.filter((p) => (p.tags.find((tag) => tag.match(tagRe))));
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

const FilteredPostList = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostList);

export default FilteredPostList;
