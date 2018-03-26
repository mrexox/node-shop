import React from 'react';
import PostFilter from '../containers/PostFilter';
import FilteredPostList from '../containers/FilteredPostList';

const HomePage = () => (
	<div>
	<PostFilter />
	<FilteredPostList />
	</div>
)

export default HomePage;
