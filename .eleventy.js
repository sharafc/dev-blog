module.exports = function(eleventyConfig) {
    // syntax highlighting plugin
    const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
    eleventyConfig.addPlugin(syntaxHighlightPlugin, {
        templateFormats: ["njk", "md"]
    });

    // rss feed plugin
    const pluginRss = require("@11ty/eleventy-plugin-rss");
    eleventyConfig.addPlugin(pluginRss);

    // get all published posts -> draft = false
    eleventyConfig.addCollection("published", function(collectionApi) {
        return collectionApi.getAllSorted().reverse().filter(function(item) {
            // Side-step tags and do your own filtering
            return item.data.draft === false;
        });
    });

    // generate new Collection containing just wanted Tags
    eleventyConfig.addCollection("tagList", require("./_filters/getTagList.js"));

    // add filter to Nunjucks since excerpt per Frontmatter didn't work
    eleventyConfig.addFilter("teaser", require("./_filters/getTeaser.js"));
    
    eleventyConfig.addFilter("publishingdate", require("./_filters/getDate.js") );
    
    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/_deliverables/css");    
    
    return {
        passthroughFileCopy: true
    };
}
