var Backbone = require('backbone');
var Movie = Backbone.Model.extend({
	defaults: {
		titulo: "default",
		anio:0,
		descripcion: "vacio",
		selected: false
	}

});
module.exports = Movie;

/*
cd app
node

Movie = require('./models/movie');
movie = new Movie({title: "Titanic"})
movie

movie.get('title');

movie.set({"title": "Troya"});

mkdir app/collections
cd app/node_modules
ln -sf ../collections

Movies.js

*/