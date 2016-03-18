var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Movies = require("./collections/movies");
var data = require('./movies.json');
var movies = new Movies(data);
Monitor = require('./monitor.js');
monitor = new Monitor(movies);
var MovieView = require('./views/movie2');
var MoviesList = require('./views/moviesList');
module.exports = {movies: movies, MovieView:MovieView, MoviesList: MoviesList};



/*
browserify -r ./app/main.js:app > ./static/bundle.js

Desde consola chrome

app = require('app')
movie = app.movies.get(1);
view = new app.MovieView({model:movie});
document.body.appendChild(view.render().el);

app.movies.resetSelected();
view.render().el

Nota. Data binding es diferente a context binding en vista
initialize: funciont(){
	_.bindAll(this, "render");
}

app = require('app');
movie = app.movies.get(1);
view = new app.MovieView({model:movie});
document.body.appendChild(view.render().el);
movie.set({"titulo":"La mascara"});
*/

/* MovieList
app=require('app');
moviesList = new app.MoviesList({collection: app.movies});
moviesList.render().el;
document.body.appendChild(moviesList.render().el);
*/