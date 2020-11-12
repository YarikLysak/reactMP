import React from "react";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";

import Main from "../components/Main";

function renderHTML(html) {
  return `
    <doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <title>React Mentoring</title>
            </head>
            <body>
                <div id="container">${html}</div>
                <script src="./dist/app.bundle"></script>
            </body>
        </html>
    </doctype>
    `;
}

export default function serverRenderer(req, store) {
  return renderHTML(
    <Main
      context={{}}
      location={req.path}
      Router={StaticRouter}
      store={store}
    />
  );
}
