var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');


var MovieView = Backbone.View.extend({
tagName:'article',
className: 'movie',
template:'<h1><%= titulo %><hr></h1>',

events:{
	'click': '_selectMovie'
},

_selectMovie: function(ev){
	ev.preventDefault();
	if(!this.model.get('selected')){
	this.model.collection.resetSelected();
	this.model.collection.selectByID(this.model.id);
	}
	console.log($(ev.currentTarget).html())
	console.log(this.model.get('titulo'));
},

render: function(){
	var tmpl = _.template(this.template);
	this.$el.html(tmpl(this.model.toJSON()));
	this.$el.toggleClass('selected', this.model.get('selected'));
	return this;
},

initialize: function(){
	this.listenTo(this.model, "change:titulo", this.render);
}

});
module.exports = MovieView;



/*


browserify -r ./app/main.js:app > ./static/bundle.js


app = require('app');
moviesList = new app.MoviesList({collection: app.movies});
document.body.appendChild(moviesList.render().el);

Clickeamos sobre la pelicula

*/