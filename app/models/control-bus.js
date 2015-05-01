import DS from 'ember-data';

let ControlBus = DS.Model.extend({
  name: DS.attr(),
  enabled: DS.attr(),
  group: DS.belongsTo('address-group', { async: true })
});

ControlBus.reopenClass({
  FIXTURES: [
    {
      id: 0,
      name: 'Control Bus A',
      enabled: true,
      group: 1
    },
    {
      id: 2,
      name: 'Control Bus B',
      enabled: true,
      group: 3
    }
  ]
});

export default ControlBus;
