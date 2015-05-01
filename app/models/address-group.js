import DS from 'ember-data';

let AddressGroup = DS.Model.extend({
  user_label: DS.attr(),
  device: DS.hasMany('camera')
});

AddressGroup.reopenClass({
  FIXTURES: [
    {
      id: 0,
      user_label: 'Training Room 101',
      device: [0,1]
    },
    {
      id: 1,
      user_label: 'North Classroom',
      device: [0,1,2]
    },
    {
      id: 2,
      user_label: 'Auditorium',
      device: []
    },
    {
      id: 3,
      user_label: 'Bla',
      device: []
    }
  ]
});

export default AddressGroup;
