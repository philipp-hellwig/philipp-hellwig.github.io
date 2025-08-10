const markdownIt = require("markdown-it");
const markdown = require("markdown-it-emoji").full;

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/projects");
  const mdLib = markdownIt({ html: true, breaks: true, linkify: true }).use(markdown);
  eleventyConfig.setLibrary("md", mdLib);

  return {
    pathPrefix: "/philipp-hellwig.github.io/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
