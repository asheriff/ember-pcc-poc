import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  rootUrl: '/src/vaddio/pcc-native-web-proto/xxx/'
});

export default Router.map(function() {
  this.route('home');
  this.route('standby');
  this.route('preset', function() {
    this.route(':preset_id');
  });
  this.route('preset/store');
  this.route('ccu');
  this.route('ccu-scene');
  this.route('camera');
  this.route('macro');
  this.route('settings');
  this.route('control-bus');
  this.route('edit-attr', { path: '/edit-attr/:key' });
});
