import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import serverRenderer from "./serverRenderer";

const port = 8080;
const app = express();

app.use(express.static("dist"));

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:3000",
    pathRewrite: { "^/api": "" },
    changeOrigin: true,
  })
);

app.get("*", async (req, res) => {
  res.write(await serverRenderer(req, res));
  res.end();
});

app.listen(port, () => {
  console.log(`express port is ${port}`);
});
