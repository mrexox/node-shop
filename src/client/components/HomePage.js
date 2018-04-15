import React from 'react';
import PostFilter from '../containers/PostFilter';
import FilteredPostList from '../containers/FilteredPostList';

const HomePage = ({ param }) => (
	<div>
	<PostFilter filter={param}/>
	<FilteredPostList />
	</div>
)

export default HomePage;
