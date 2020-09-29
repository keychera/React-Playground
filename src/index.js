import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <>
    <Helmet>
      <script type="text/javascript">{
        // Single Page Apps for GitHub Pages
        // https://github.com/rafgraph/spa-github-pages
        // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
        (function (l) {
          if (l.search) {
            var q = {};
            l.search.slice(1).split('&').forEach(function (v) {
              var a = v.split('=');
              q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
            });
            if (q.p !== undefined) {
              window.history.replaceState(null, null,
                l.pathname.slice(0, -1) + (q.p || '') +
                (q.q ? ('?' + q.q) : '') +
                l.hash
              );
            }
          }
        }(window.location))}
      </script>
    </Helmet>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
  , document.getElementById('root')
);
