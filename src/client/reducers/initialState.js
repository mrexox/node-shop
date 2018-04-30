// The state of an application without any fetching
// For fetching we use port 8080 (let it be)
export default {
	postFilter: '',			// equivalent of ALL
	posts: {
		isFetching: false,      // while asynchronous requrest
		data: []
    },
    auth: {
        status: 'unsigned',
        token: false,
        user: {
            name: false
        },
        error: {
            message: ''
        }
    },
    register: {
        // ??
    }
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
