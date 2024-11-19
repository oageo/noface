module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy({
        "./node_modules/bulma/css/bulma.min.css" : "/assets/bulma.min.css"
    })
    return {
        dir: {
            input: "src",
            output: "dist",
        }
      }
}