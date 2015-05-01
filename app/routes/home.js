import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        name: 'Presets',
        route: 'preset'
      },
      {
        name: 'CCU',
        route: 'ccu'
      },
      {
        name: 'Scenes',
        route: 'ccu-scene'
      },
      {
        name: 'Streaming',
        route: 'streaming'
      },
      {
        name: 'Macros',
        route: 'macro'
      },
      {
        name: 'Address Book',
        route: 'control-group'
      },
      {
        name: 'Settings',
        route: 'settings'
      },
      {
        name: 'Power'
      }
    ];
  }
});
