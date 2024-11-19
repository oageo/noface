module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({
        "./node_modules/bulma/css/bulma.min.css" : "/assets/bulma.min.css"
    });
    eleventyConfig.addPassthroughCopy(
        "src/assets"
    );
    eleventyConfig.addPassthroughCopy(
        "src/scripts"
    );
    return {
        dir: {
            input: "src",
            output: "dist",
        }
      }
}