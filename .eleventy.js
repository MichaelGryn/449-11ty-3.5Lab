
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("date", function(planet, year) {
      return `<h2>Date: ${planet}, Year ${year}</h2>`;
  });
};