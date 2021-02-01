import nodeFetch from 'node-fetch';
import fs from 'fs';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
import { StaticRouter, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import compression from 'compression';
import express from 'express';
import httpContext from 'express-http-context';
import configureStore from './config/configureStore.js';
import App from './App.js';
import Routes from './Routes';

// const compression = require('compression');
// const express = require('express');
// const httpContext = require('express-http-context');

process.env.TZ = 'Asia/Taipei';
const PORT = 3000;

// initialize the application and create the routes
const app = express();
app.use(compression());
app.use(httpContext.middleware);

const context = {};
const fetch = (url, opts = {}) => (url.startsWith('http') ? nodeFetch(url, { ...opts }) : nodeFetch(`http://localhost:3001${url}`, { ...opts }));
globalThis.fetch = fetch;

// app.use(express.static(
//   path.resolve(__dirname, '..', 'build'),
//   { maxAge: '30d', index: false },
// ));

app.get('/*', (req, res) => {
  // 1
  let store = configureStore({});
  const queryString = Object.keys(req.query).map((key) => key + '=' + req.query[key]).join('&');
  const location = { query: req.query, pathname: req.path, search: queryString };
  // 2
  const promises = matchRoutes(Routes, req.path).map(({ route, match }) => {
    return route.getInitialData ? route.getInitialData(store, match, location) : Promise.resolve(null);
  });

  Promise.all(promises).then(() => {
    // 3
    const rootString = renderToString(
      <Provider store={ store }>
        <StaticRouter location={ location } context={ context }>
          <Switch>
            <App />
          </Switch>
        </StaticRouter>
      </Provider>
    );

    fs.readFile('./build/index.html', 'utf8', (err, data) => {
      if (err) throw err;
      const initState = store.getState();
      const helmet = Helmet.renderStatic();
      const html = injectHTML(data, {
        html: helmet.htmlAttributes.toString(),
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        script: helmet.script.toString(),
        body: rootString,
        initState: initState,
      });
      // Inserts the rendered React HTML into our main div
      // const document = data.replace(/<div id="root"><\/div>/, `<div id="root">${rootString}</div>`);

      // Sends the response back to the client
      // res.status(200).send(document);
      res.status(200).send(html);
    });
  }).catch((err) => console.error(err));
});

const injectHTML = (data, {
  html, title, meta, script, body, initState
}) => {
  const initialState = JSON.stringify(initState).replace(/</g, '\\u003c');
  meta = decodeEntity(meta);
  data = data.replace('<html>', `<html ${html}>`);
  data = data.replace(/<title>.*?<\/title>/g, title);
  data = data.replace('</head>', `${meta}</head>`);
  data = data.replace('<body>', `<body> \n ${script}<script>window.__INITIAL_STATE__ =${initialState}</script>`);
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div>`
  );

  return data;
};

function decodeEntity(htmlTags) {
  return htmlTags.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

const server = app.listen(PORT, () => {
  console.log(`Server started at ${PORT}...`);
});

export default server;
