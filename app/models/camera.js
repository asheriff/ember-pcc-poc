import DS from 'ember-data';

let Camera = DS.Model.extend({
  name: DS.attr()
});

Camera.reopenClass({
  FIXTURES: [
    { id: 0, name: 'RoboSHOT 12 USB' },
    { id: 1, name: 'RoboSHOT 30' },
    { id: 2, name: 'RoboSHOT 12 HDMI' }
  ]
});

export default Camera;
