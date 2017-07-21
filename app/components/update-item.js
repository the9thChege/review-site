import Ember from 'ember';

export default Ember.Component.extend({
  updateItemForm: false,
  actions: {
    updateItemForm() {
      this.set('updateItemForm', true);
    },
    update(item) {
      var params = {
        owner: this.get('owner'),
        city: this.get('city'),
        type: this.get('type'),
        image: this.get('image'),
        bedrooms: this.get('bedrooms'),
        cost: parseInt(this.get('cost')),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')
      };
      this.set('updateItemForm', false);
      this.sendAction('update', item, params);
    }
  }
});
