const path = require("path");

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      ["babel-plugin-module-resolver",
        {
          root: './src',
          alias: {
            "@": path.resolve(__dirname, "src")
          }
        }
      ],
    ]
  };
};
