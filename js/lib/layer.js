/**
 * Created by The Deceased on 17.06.14.
 */

var MyCanvasLayer = function(parent) {
	this.make(parent);
};

MyCanvasLayer.prototype.make = function(parent) {
	this.parent = parent;
	this.shapes = [];
	return this;
};

MyCanvasLayer.prototype.addShape = function(shape) {
	this.shapes.push(shape);
};

MyCanvasLayer.prototype.draw = function(ctx) {
	for (var i = this.shapes.length - 1; i >= 0; i--) {
		this.shapes[i].draw(ctx);
	}
};


var MyCanvasLayers = function() {
	this.make();
};

MyCanvasLayers.prototype.layers = null;

MyCanvasLayers.prototype.make = function() {
	this.layers = [];
	this.newLayer();
};

MyCanvasLayers.prototype.add = function(layer) {
	this.layers.push(layer);
	return this;
};

MyCanvasLayers.prototype.newLayer = function() {
	var layer = this.createLayer();
	this.layers.push(layer);
	return layer;
};

MyCanvasLayers.prototype.createLayer = function() {
	return new MyCanvasLayer();
};

MyCanvasLayers.prototype.currentLayer = function() {
	return this.layers[0];
};

MyCanvasLayers.prototype.addShape = function(shape) {
	this.currentLayer().addShape(shape);
};

MyCanvasLayers.prototype.draw = function(ctx) {
	for (var i = this.layers.length - 1; i >= 0; i--) {
		this.layers[i].draw(ctx);
	}
};