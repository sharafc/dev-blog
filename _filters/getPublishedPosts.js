/**
 * Generates a new, descending collection of posts which are published.
 * Published means, the draft flag is false.
 * 
 * Additionally we add a previous and next link to the collection, if present.
 * 
 * @param {collectionApi} collectionApi The collection of all posts
 */
module.exports = function(collectionApi) {
    let publishedCollection = collectionApi.getAllSorted().reverse().filter(function(item) {
        // Side-step tags and do your own filtering
        return item.data.draft === false;
    });

    for(let i = 0; i < publishedCollection.length ; i++) {
        //order reverted since we get a descending list
        const nextPost = publishedCollection[i - 1];
        const previousPost = publishedCollection[i + 1];

        publishedCollection[i].data["nextPost"] = nextPost;
        publishedCollection[i].data["previousPost"] = previousPost;
    }

    return publishedCollection;
};
