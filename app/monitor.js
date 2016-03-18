var _ = require('underscore');
var Backbone = require('backbone');

var Monitor = function(collection){
	_.extend(this, Backbone.Events);
	this.listenTo(collection, 'all', function(eventName){
		console.log(eventName);

	});

}
module.exports = Monitor;

/*
browserify -r ./app/main.js:app > ./static/bundle.js

En la consola del browser
movies = require('app');
movies.first().set({"selected":true})
movies.first().set({"selected":true},{silent:true})

movies.selectByID(2)
movies.get(2).get("selected")
movies.resetSelected()
*/