import DS from 'ember-data';
import _ from 'npm:underscore';

let Preset = DS.Model.extend({
  name: DS.attr()
});

var MODEL_COUNT = 16;

var CUSTOM_LABELS = {
  '0': 'Whiteboard',
  '1': 'Classroom'
};

Preset.reopenClass({
  FIXTURES: _.times(MODEL_COUNT, function(idx) {
    return {
      id: idx,
      is_set: Math.random() > 0.7,
      name: CUSTOM_LABELS[idx+''] || 'Preset ' + (idx + 1)
    };
  })
});

export default Preset;
