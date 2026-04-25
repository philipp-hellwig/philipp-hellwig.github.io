import markdownIt from "markdown-it";
import fontAwesomePlugin from "@11ty/font-awesome";
import katex from "katex";
import { DateTime } from "luxon";


export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/projects");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  
  // icons
  eleventyConfig.addPlugin(fontAwesomePlugin, {
		transform: false,
		shortcode: "icon",
    defaultAttributes: {
			class: "icon",
		}
	});
  
  // date conversion
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // math formulas
  eleventyConfig.addFilter("latex", (content) => {
    return content.replace(/\$\$(.+?)\$\$/g, (_, equation) => {
      const cleanEquation = equation.replace(/&lt;/g, "<").replace(/&gt;/g, ">");

      return katex.renderToString(cleanEquation, { throwOnError: false });
    });
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
