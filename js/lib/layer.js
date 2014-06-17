/**
 * Created by safronov on 17.06.14.
 */

var MyCanvasLayer = function(parent) {
	this.create(parent);
};

MyCanvasLayer.prototype.create = function(parent) {
	this.parent = parent;
	return this;
};

var MyCanvasLayers = function() {
	this.create();
};

MyCanvasLayers.prototype.create = function() {
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

MyCanvas.prototype.createLayer = function() {
	return new MyCanvasLayer();
};