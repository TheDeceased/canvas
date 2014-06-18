/**
 * Created by safronov on 17.06.14.
 */

var MyCanvasShape = function() {
	this.create();
};

MyCanvasShape.prototype.mustBeFilled = false;
MyCanvasShape.prototype.fillColor = '#000';

MyCanvasShape.prototype.mustBeStroked = false;
MyCanvasShape.prototype.strokeColor = '#000';
MyCanvasShape.prototype.lineWidth = 1;

MyCanvasShape.prototype.create = function () {
	return this;
};

MyCanvasShape.prototype.setFillColor = function(color) {
	this.fillColor = color;
	return this;
};

MyCanvasShape.prototype.fill = function(color) {
	if (color) {
		this.setFillColor(color);
	}
	this.mustBeFilled = true;
	return this;
};


MyCanvasShape.prototype.setLineWidth = function(width) {
	this.lineWidth = width;
	return this;
};

MyCanvasShape.prototype.setStrokeColor = function(color) {
	this.strokeColor = color;
	return this;
};

MyCanvasShape.prototype.stroke = function(color) {
	if (color) {
		this.setStrokeColor(color);
	}
	this.mustBeStroked = true;
	return this;
};

MyCanvasShape.prototype.draw = function(ctx) {
	return this;
};