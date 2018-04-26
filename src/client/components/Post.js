import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ImageList from './ImageList';
import { SEARCH } from '../Constants';
import '../styles/Post.css';

const Post = ({ id, likes, imageList, htmlText, tags, likePost }) => (
	<div className="post">
	  <ImageList images={imageList} />
	  <div className="post__text" dangerouslySetInnerHTML={{__html:htmlText}}></div>
	  <span className="post__likes" onClick={likePost}>{likes} Loved it!</span>
	  <div className="post__tags">
		{tags.map((name, index) => (
			<Link key={index} className="post__tag" to={`/${SEARCH}/${name}`}>
			  {name}
			</Link>
		))}
	</div>
		</div>
);

// See reducers/initialStates
Post.propTypes = {
	id: PropTypes.string,
	likes: PropTypes.string.isRequired,
	htmlText: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(
		PropTypes.string
	).isRequired,
	imageList: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired
		}).isRequired
	),
	likePost: PropTypes.func.isRequired
};

export default Post;
