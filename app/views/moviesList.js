var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

var MovieView = require('./movie2');
var MoviesList = Backbone.View.extend({
	tagName: 'section',

	render:function(){
		var moviesView = this.collection.map(function(movie){
			return (new MovieView({model: movie})).render().el;

		});
		this.$el.html(moviesView);
		return this;
	}

});
module.exports = MoviesList;