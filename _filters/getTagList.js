/**
 * Returns a collection of sorted Tags, filtering out common tags like post(s) and all 
 * 
 * Shamelessly plugged from Phil Hawksworth: https://twitter.com/philhawksworth
 */
module.exports = function (collection) {
    let tagSet = new Set();
    collection.getAllSorted().forEach(function (item) {
        if ("tags" in item.data) {
            let tags = item.data.tags;
            if (typeof tags === "string") {
                tags = [tags];
            }

            tags = tags.filter(function (item) {
                switch (item) {
                    case "all":
                    case "nav":
                    case "post":
                    case "posts":
                        return false;
                }

                return true;
            });

            for (const tag of tags) {
                tagSet.add(tag);
            }
        }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet].sort();
};
