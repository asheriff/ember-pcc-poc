import DS from 'ember-data';

let AddressBook = DS.Model.extend({
  group: DS.hasMany('address-group')
});

export default AddressBook;
