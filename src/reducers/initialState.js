// The state of an application without any fetching
// For fetching we use port 8080 (let it be)
export default {
	menu: 'HOME',
	postFilter: '',			// equivalent of ALL
	isFetching: false,      // while asynchronous requrest
	posts : []
};

/*
post: {
   id,
   title,
   htmlText,
   imageList,
   likes,
   tags
}
imageList: [ image ]
image: { url }
tags: [ tagName ]
*/
