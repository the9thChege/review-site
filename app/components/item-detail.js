import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('item.reviews', 'sortBy'),

  actions: {
    delete(item) {
      if (confirm('Are you sure you want to delete this item?')) {
        this.sendAction('destroyItem', item);
      }
    },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});
