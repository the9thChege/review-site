export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(item) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(item.get('latitude'), item.get('longitude')),
        zoom: 15
      };
      this.get('map').findMap(container, options);
    }
  }
});
