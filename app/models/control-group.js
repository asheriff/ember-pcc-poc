import DS from 'ember-data';

let ControlGroup = DS.Model.extend({
  name: DS.attr()
});

ControlGroup.reopenClass({
  FIXTURES: [
    {
      id: 0,
      name: 'Control Bus A',
      label: 'Rotunda Hall',
      enabled: true
    },
    {
      id: 1,
      name: 'Control Bus B',
      label: 'Room 101',
      enabled: true
    }
  ]
});

export default ControlGroup;
