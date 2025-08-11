import markdownIt from "markdown-it";
import fontAwesomePlugin from "@11ty/font-awesome";


export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/projects");
  eleventyConfig.addPassthroughCopy("src/css");
  
  eleventyConfig.addPlugin(fontAwesomePlugin, {
		transform: false,
		shortcode: "icon",
    defaultAttributes: {
			class: "z-icon",
		}
	});

  const mdLib = markdownIt({ html: true, breaks: true, linkify: true })
  eleventyConfig.setLibrary("md", mdLib);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
