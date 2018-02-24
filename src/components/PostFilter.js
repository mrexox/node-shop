import React from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../actions/filterActions';

const mapDispatchToProps = dispatch => {
	return {
		onChange: (e) => dispatch(applyFilter(e.target.value))
	}
};

let PostFilter = ({ onChange }) => (	
	<input onChange={onChange} />
);

PostFilter = connect(
	state => {},
	mapDispatchToProps
)(PostFilter);


export default PostFilter;
