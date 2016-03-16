/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var mergeTrees = require('broccoli-merge-trees');
const BroccoliFunnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: []
  });
  
  var materialTree = BroccoliFunnel('node_modules/@angular2-material', {
    destDir: '@angular2-material'
  });
  
  return mergeTrees([
    app.toTree(),
    materialTree,
  ]);
};
