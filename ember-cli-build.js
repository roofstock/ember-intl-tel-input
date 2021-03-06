/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {

    sassOptions: {
      extension: 'scss',
      includePaths: [
        'bower_components/bootstrap-sass/assets/stylesheets',
      ],
    },

    'ember-prism': {

      'components': [
        'handlebars',
        'javascript',
      ],

      'plugins': [
        'show-language',
      ],

    },

    fingerprint: {
      enabled: false,
    },

    intlTelInput: {
      includeUtilsScript: true,
    },

  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');

  return app.toTree();
};
