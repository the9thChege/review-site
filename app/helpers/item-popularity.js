import Ember from 'ember';

export function itemPopularity(params) {
  var item = params[0];

  if(item.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(itemPopularity);
