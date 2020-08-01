module.exports =
  process.env.NODE_ENV === "dev"
    ? require("./webpack.config.dev")
    : require("./webpack.config.prod");
