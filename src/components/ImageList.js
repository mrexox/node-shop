import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const ImageList = ({ images }) => (
	<div class="image-list">
	{images.map((img, index) => (<Image key={index} {...img} />))}
	</div>
);

ImageList.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired
		})
	).isRequired
};

export default ImageList;
