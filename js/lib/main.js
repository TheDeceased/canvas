/**
 * Created by The Deceased on 16.06.14.
 */

var MyCanvas = function(parent) {
	this.make(parent);
};

MyCanvas.prototype.canvas = null;
MyCanvas.prototype.ctx = null;

MyCanvas.prototype.make = function(parent) {
	var canvas  = document.createElement('canvas');
	var that = this;
	this.canvas = canvas;
	this.ctx = canvas.getContext('2d');

	this.layers = new MyCanvasLayers();
	window.onresize = function(){ that.resize(that, canvas, parent) };
	this.resize(that, canvas, parent);
	if (!parent) {
		parent = document.getElementsByTagName('body')[0];
	}
	parent.appendChild(canvas);
	return this;
};

MyCanvas.prototype.resize = function(that, canvas, parent) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	that.draw();
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