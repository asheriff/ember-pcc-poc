import DS from 'ember-data';
import _ from 'npm:underscore';

let AddressGroup = DS.Model.extend({
  name: DS.attr(),
  user_label: DS.attr(),
  device: DS.hasMany('camera'),

  uiLabel: function() {
    return this.get('user_label') || this.get('name');
  }.property('name', 'user_label')
});


var fixtures = _.times(10, function(idx) {
  return {
    id: idx,
    name: 'Address Group ' + (idx + 1)
  }
});

_.extend(fixtures[0], {
  user_label: 'Training Room 101',
  device: [0,1]
});

_.extend(fixtures[1], {
  user_label: 'North Classroom',
  device: [0,1,2]
});

_.extend(fixtures[2], {
  user_label: 'Auditorium',
  device: [0,1]
});

AddressGroup.reopenClass({
  FIXTURES: fixtures
});

export default AddressGroup;
