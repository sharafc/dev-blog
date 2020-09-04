module.exports = function(eleventyConfig) {
    // syntax highlighting plugin
    const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
    eleventyConfig.addPlugin(syntaxHighlightPlugin, {
        templateFormats: "md"
    });

    // custom posts collection, to not have the need to tag blogposts with 'post'
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("blog/*.md").reverse();
    });

    // add filter to Nunjucks since excerpt per frontmatter didn't work
    eleventyConfig.addFilter("section", require("./_filters/section.js"));

    eleventyConfig.addPassthroughCopy("src/img"); eleventyConfig.addPassthroughCopy("src/_deliverables/css");
    return {
        passthroughFileCopy: true
    };
}