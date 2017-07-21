import Ember from 'ember';

export default Ember.Component.extend({
  addNewItem: false,
  actions: {
    itemFormShow() {
      this.set('addNewItem', true);
    },
    saveItem1() {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image') ? this.get('image') : "",
        bedrooms: this.get('bedrooms'),
        cost: parseInt(this.get('cost')),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')
      };
      this.set('addNewItem', false);
      this.sendAction('saveItem2', params);
    }
  }
});
