import React from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../actions/filterActions';

const mapDispatchToProps = dispatch => {
	return {
		onChange: (e) =>  dispatch(applyFilter(e.target.value))
	};
};

const mapStateToProps = state => {
	return {
		postFilter: state.postFilter
	};
};

let PostFilter = ({ onChange, postFilter }) => (	
	<input onChange={onChange} value={postFilter}/>
);

PostFilter = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostFilter);


export default PostFilter;
