import DS from 'ember-data';

let Macro = DS.Model.extend({
  name: DS.attr()
});

Macro.reopenClass({
  FIXTURES: [
    { id: 0, name: 'Shot 1 -- Lecture Capture' },
    { id: 1, name: 'Shot 2 -- Group Meeting' },
    { id: 2, name: 'All Cams On' },
    { id: 3, name: 'All Cams Off' },
    { id: 4, name: 'All Cams Home' }
  ]
});

export default Macro;
