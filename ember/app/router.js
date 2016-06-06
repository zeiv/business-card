import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('experience');
  this.route('contact');
  this.route('success');
});

export default Router;
