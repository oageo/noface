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
    eleventyConfig.addPassthroughCopy({ 
        "src/robots.txt" : "/robots.txt"
    });
    eleventyConfig.addPassthroughCopy({
        "src/manifest.json" : "/manifest.json" 
    })
    return {
        dir: {
            input: "src",
            output: "dist",
        }
      }
}