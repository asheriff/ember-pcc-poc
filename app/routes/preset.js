import Ember from 'ember';
import _ from 'npm:underscore';

export default Ember.Route.extend({
  model: function() {
    return _.times(16, function(idx) {
      return {
        id: idx,
        name: 'Preset ' + (idx + 1)
      };
    });
  }
});

