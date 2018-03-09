import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ url }) => (
	<img src={url} alt={'#'}/>
);

Image.propTypes = {
	url: PropTypes.string.isRequired
};

export default Image;
