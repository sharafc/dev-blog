module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("css");

    return {
        passthroughFileCopy: true
    };
}
