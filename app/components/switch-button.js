import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['switch', 'off'],

  isOn: false,

  actions: {
    click: function() {
      this.set('isOn', !this.isOn);
      this.$().toggleClass('on off');
    }
  }
});
