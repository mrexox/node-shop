import React from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../actions/filterActions';
import '../styles/PostFilter.css';

const mapDispatchToProps = dispatch => {
	return {
		onChange: (e) =>  dispatch(applyFilter(e.target.value))
	};
};

const mapStateToProps = (state) => { // TODO accept { filter }
	return {
		postFilter: state.postFilter
	};
};

let PostFilter = ({ onChange, postFilter }) => (
	<input onChange={onChange} value={postFilter} className="filter"/>
);

PostFilter = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostFilter);


export default PostFilter;
