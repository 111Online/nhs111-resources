const Nunjucks = require("nunjucks");
const path = require("path");

module.exports = function (eleventyConfig) {
  const nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader([
      "_includes",
      "_layouts",
      path.join(
        path.dirname(require.resolve("nhsuk-frontend/package.json")),
        "packages"
      ),
    ])
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
  eleventyConfig.htmlTemplateEngine = "njk";
  eleventyConfig.markdownTemplateEngine = "njk";

  eleventyConfig.dir = {
    output: "dist",
    input: "src",
    layouts: "_layouts",
  };

  return eleventyConfig;
};
