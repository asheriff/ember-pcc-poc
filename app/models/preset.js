import DS from 'ember-data';
import _ from 'npm:underscore';

let Preset = DS.Model.extend({
  name: DS.attr()
});

var CUSTOM_LABELS = {
  '0': 'Whiteboard',
  '1': 'Classroom'
}

Preset.reopenClass({
  FIXTURES: _.times(16, function(idx) {
    return {
      id: idx,
      is_set: Math.random() > .7,
      name: CUSTOM_LABELS[idx+''] || 'Preset ' + (idx + 1)
    };
  })
});

export default Preset;
