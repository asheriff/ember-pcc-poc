import Ember from 'ember';
import _ from 'npm:underscore';

var SCENE_NAMES = [
  'Custom A', 'My Label', 'Custom C',
  'Auto', 'Incandescent Hi', 'Flourescent Hi',
  'Outdoor', 'Incandescent Lo', 'Flourescent Lo'
];

export default Ember.Route.extend({
  model: function() {
    return _.times(9, function(idx) {
      return {
        id: idx,
        name: SCENE_NAMES[idx]
      };
    });
  }
});

