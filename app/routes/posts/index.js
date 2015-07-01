import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return [
      {title: 'Title 1', url: 'http://google.com'},
      {title: 'Title 2', url: 'http://google.com'},
      {title: 'Title 3', url: 'http://google.com'}
    ];
  }
});
