const Nunjucks = require("nunjucks");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "njk",
    "md",
    "png",
    "jpg",
    "pdf",
    "avi",
    "xlsx",
    "docx",
    "pptx",
  ]);

  const nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader([
      "src",
      path.join(
        path.dirname(require.resolve("nhsuk-frontend/package.json")),
        "packages/components"
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
    includes: "_includes",
  };

  eleventyConfig.pathPrefix = "/nhs111-resources";

  return eleventyConfig;
};
