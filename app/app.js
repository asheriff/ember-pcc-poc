import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.initializer({
  name: 'back-button',
  initialize: function() {
    $('BODY').on('click', '.back-button', function(e) {
      e.preventDefault();
      window.history.back();
      return false;
    });
  }
});

loadInitializers(App, config.modulePrefix);

export default App;
