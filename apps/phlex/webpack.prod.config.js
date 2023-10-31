const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.*/
   remotes: [
     ['movies', 'https://app1.example.com'],
     ['shows', 'https://app2.example.com'],
   ]

});
