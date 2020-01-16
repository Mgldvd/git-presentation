/* eslint semi: "error" */
/* jshint node: true */
/* jshint esversion: 6 */

'use strict';

const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp');

const browserSync = require('browser-sync').create();

/**
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 * ·······  Server
 * ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 **/
function serverHtml () {
  browserSync.init({
    port: 8888,
    ui: false,
    open: true,
    server: {
      baseDir: './',
      directory: true
    }
  });
}
exports.serve = serverHtml;

function reload (done) {
  browserSync.reload();
  done();
}

function watchFiles () {
  watch('./**/*', series(reload));
}

exports.default = parallel(serverHtml, watchFiles);
