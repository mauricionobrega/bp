const withTM = require("next-transpile-modules")(["ui", "components"]);

module.exports = withTM({
  reactStrictMode: true,
});
