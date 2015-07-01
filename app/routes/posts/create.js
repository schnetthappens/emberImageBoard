import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('post');
  },

  actions: {
    save: function(post) {
      post.save();
      this.transitionTo('post.index'); //not working
    }
  }
});
