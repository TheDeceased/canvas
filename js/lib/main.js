/**
 * Created by The Deceased on 16.06.14.
 */

var MyCanvas = function(parent) {
	this.create(parent);
};

MyCanvas.prototype.canvas = null;
MyCanvas.prototype.ctx = null;

MyCanvas.prototype.create = function(parent) {
	var canvas  = document.createElement('canvas');
	var that = this;
	this.canvas = canvas;
	this.ctx = canvas.getContext('2d');

	window.onresize = function(){that.resize(canvas)};
	this.resize(canvas, parent);
	if (!parent) {
		parent = document.getElementsByTagName('body')[0];
	}
	parent.appendChild(canvas);
	this.layers = new MyCanvasLayers();
	return this;
};

MyCanvas.prototype.resize = function(canvas, parent) {
	canvas.width = window.innerWidth/* - 4*/;
	canvas.height = window.innerHeight/* - 4*/;
};

MyCanvas.prototype.start = function() {
//	ticker.
};

MyCanvas.prototype.addShape = function(shape) {
	this.layers.addShape(shape);
	return this;
};

MyCanvas.prototype.draw = function() {
	this.layers.draw(this.ctx);
};