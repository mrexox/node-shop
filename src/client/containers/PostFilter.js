import React from 'react';
import { connect } from 'react-redux';
import { applyFilter } from '../actions/filterActions';
import '../styles/PostFilter.css';

const mapDispatchToProps = (dispatch, { filter} ) => {
	return {
		onChange: (e) =>  dispatch(applyFilter(e.target.value))
	};
};

const mapStateToProps = (state, myProps) => {
	// FIXME
	let filter = myProps.filter === undefined ?
		     state.postFilter // then
		   : myProps.filter;  // else
	return {
		postFilter: state.postFilter
	};
};

let PostFilter = ({ onChange, postFilter }) => (
	<input onChange={onChange}
	       value={postFilter}
	       className="filter"
	       autoFocus />
);

PostFilter = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostFilter);


export default PostFilter;
