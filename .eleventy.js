module.exports = function(eleventyConfig) {
    // syntax highlighting plugin
    const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
    eleventyConfig.addPlugin(syntaxHighlightPlugin, {
        templateFormats: ["njk", "md"]
    });

    // custom posts collection, to not have the need to tag blogposts with 'post'
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("blog/*.md").reverse();
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