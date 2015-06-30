import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['posts-list'],

  posts: [
    {title: 'Title 1', url: 'http://google.com'},
    {title: 'Title 2', url: 'http://google.com'},
    {title: 'Title 3', url: 'http://google.com'}
  ]
});
