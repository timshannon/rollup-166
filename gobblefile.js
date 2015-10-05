var gobble = require("gobble");
var src = gobble("./src");

module.exports = gobble([
    src,
    js("index.js").moveTo("js"),
]);

function js(page) {
    return gobble("src/js").transform("rollup", {
        entry: page,
        format: "umd",
    });
}
