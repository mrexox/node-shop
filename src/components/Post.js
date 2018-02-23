import React from 'react';
import PropTypes from 'prop-types';


const Post = ({ id, likes, imageList, htmlText, tags, onClick, likePost }) => (
	<div class="post" onClick={onClick}>
	<div class="post__text" dangerouslySetInnerHTML={{__html:htmlText}}></div>
	<span class="post__likes" onClick={likePost}>{likes} Loved it!</span>
	<div class="post__tags">
	{tags.map((name) => (
		<span class="post__tag">{name}</span>
	))}
	</div>
	</div>
);

// See reducers/initialStates
Post.propTypes = {
	id: PropTypes.number,
	likes: PropTypes.number.isRequired,
	htmlText: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(
		PropTypes.string
	).isRequired,
	imageList: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired
		}).isRequired
	),
	onClick: PropTypes.func.isRequired,
	likePost: PropTypes.func.isRequired
};
