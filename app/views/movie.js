var $ = require('jquery');
var Backbone = require('backbone');

var MovieView = Backbone.View.extend({
tagName:'article',
className: 'movie',

render: function(){
	this.$el.html(this.model.get('titulo'));
	this.$el.toggleClass('selected', this.model.get('selected'));
	return this;
},
/*
initialize: function(){
	_.bindAll(this, "render");
}
*/
initialize: function(){
	this.listenTo(this.model, "change:titulo", this.render);
}

});
module.exports = MovieView;



/*
puse el atributo en español: titulo

*/