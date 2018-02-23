import assert from 'assert';
import { getFilteredPosts } from '../src/components/FilteredPostList';

let posts = [
	{id: 1, tags: ['1', 'asd', 'test']	},
	{id: 2, tags: ['2', 'ui', 'test']	},
	{id: 3, tags: ['3', 'pop', '202']	},
	{id: 4, tags: ['4', 'asd', 'lol']	}
]

describe('Posts filtering', () => {
	['1', 'p', 'a', 'test'].forEach((filter) => {
		let filteredPosts = getFilteredPosts(posts, filter);
		it(`should filter '${filter}' the right way`, () => {
			switch (filter) {
				case '1': assert.equal(filteredPosts.length, 1); break;
				case 'p': assert.equal(filteredPosts.length, 1); break;
				case 'a': assert.equal(filteredPosts.length, 2); break;
				case 'test': assert.equal(filteredPosts.length, 2); break;		
			}
		});
		
	});
});
