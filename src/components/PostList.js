import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

// Every Post has all attributes given in props
const PostList = ({ posts, onClick, likePost }) => (
	<div class="post-list">
	{posts.map((post, index) => (
		<Post
		key={index}
		{...post}
		onClick={() => onClick(post.id)}
		likePost={() => likePost(post.id)} />
	))}
	</div>
)

PostList.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			likes: PropTypes.number.isRequired
		})
	).isRequired,
	onClick: PropTypes.func,
	likePost: PropTypes.func.isRequired
}

export default PostList;
