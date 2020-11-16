import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { ServerStyleSheets } from "@material-ui/core/styles";

import Main from "../src/components/Main";
import configureStore from "../src/helper/configureStore";

import mainStyles from "../src/assets/styles/main.css";
import fonts from "../src/assets/styles/fonts.css";

function renderHTML(html, css, preloadedState) {
  return `
    <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />

                <style id="jss-server-side">${css}</style>
                <style id="global-css-server-side">${mainStyles}</style>
                <style id="global-fonts-server-side">${fonts}</style>
            </head>
            <body>
                <div id="container">${html}</div>
                <script>
                // WARNING: See the following for security issues around embedding JSON in HTML:
                // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                window.PRELOADED_STATE = ${JSON.stringify(
                  preloadedState
                ).replace(/</g, "\\u003c")}
              </script>
                <script src="/app.bundle.js"></script>
            </body>
        </html>
    </doctype>
    `;
}

export default async function serverRenderer(req, res) {
  const store = configureStore();
  const context = {};
  const initPromises = [];
  const sheets = new ServerStyleSheets();

  const root = () =>
    sheets.collect(
      <Main
        initPromises={initPromises}
        context={context}
        location={req.url}
        Router={StaticRouter}
        store={store}
      />
    );

  renderToString(root());

  try {
    await Promise.all(initPromises);
  } catch (error) {
    console.log(error);
  }

  if (context.url) {
    res.writeHead(302, {
      Location: context.url,
    });
  }

  const main = renderToString(root());
  return renderHTML(main, sheets.toString(), store.getState());
}
