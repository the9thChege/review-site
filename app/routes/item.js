import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('item', params.item_id);
  },
  actions: {
    update(item, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          item.set(key, params[key]);
        }
      });
      item.save();
      this.transitionTo('index');
    },
    destroyItem(item) {
      var review_deletions = item.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return item.destroyRecord();
      });
      this.transitionTo('index');
    },
    destroyReview(review) {
      review.destroyRecord();
      this.transitionTo('index');
    },
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      var item = params.item;
      item.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return item.save();
      });
      this.transitionTo('item', item);
    }
  }
});
