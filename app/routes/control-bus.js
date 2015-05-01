import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('control-bus');
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    this.store.find('address-group').then(function(groups) {
      controller.set('groups', groups);
    });
  }
});
