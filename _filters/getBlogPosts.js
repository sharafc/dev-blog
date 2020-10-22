/**
 * Returns a collection of blog posts which are ready to be published
 * Looks up FM attribute draft: true|false 
 */
module.exports = function (collection) {

    let postSet = new Set();

    debugger;

    collection.getAllSorted().forEach(function (item) {
        
        if (item.data.draft !== true) {
            postSet.add(item);
        }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...postSet].sort();
};
