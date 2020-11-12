import createStoreHelper from "../src/helper/createStore";
import serverRenderer from "../src/helper/serverRenderer";

const express = require("express");
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStoreHelper();

  res.send(serverRenderer(req, store));
});

app.listen(port, () => {
  console.log(`express port is ${port}`);
});
