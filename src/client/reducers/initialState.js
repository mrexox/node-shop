// The state of an application without any fetching
// For fetching we use port 8080 (let it be)
export default {
	postFilter: '',			// equivalent of ALL
	posts : {
		isFetching: false,      // while asynchronous requrest
		data: []
    },
    login : {
        status: '',
        token: '',
        message: ''
    },
    register : {
        inProcess: false
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
