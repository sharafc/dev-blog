module.exports = function(eleventyConfig) {
    // syntax highlighting plugin
    const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
    eleventyConfig.addPlugin(syntaxHighlightPlugin, {
        templateFormats: ["njk", "md"]
    });

    // get all published posts -> draft = false
    eleventyConfig.addCollection("published", function(collectionApi) {
        return collectionApi.getAllSorted().reverse().filter(function(item) {
            // Side-step tags and do your own filtering
            console.log(item.data.draft);
            return item.data.draft === false;
        });
    });

    // generate new Collection containing all Tags
    eleventyConfig.addCollection("tagList", require("./_filters/getTagList.js"));

    // add filter to Nunjucks since excerpt per frontmatter didn't work
    eleventyConfig.addFilter("teaser", require("./_filters/getTeaser.js"));
    
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/_deliverables/css");    
    
    return {
        passthroughFileCopy: true
    };
}