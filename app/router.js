import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('create');
    this.route('show', {path: '/:post_id'});
  });
  this.route('landing');

  this.route('users', function() {
    this.route('create');
  });

  this.route('sessions', function() {
    this.route('create');
  });
});

export default Router;
