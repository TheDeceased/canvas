/**
 * Created by safronov on 17.06.14.
 */

var MyCanvasRect = function(x, y, width, height) {
	this.create(x, y, width, height);
};

MyCanvasRect.prototype.x = 0;
MyCanvasRect.prototype.y = 0;
MyCanvasRect.prototype.width = 0;
MyCanvasRect.prototype.height = 0;

MyCanvasRect.prototype.create = function(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	return this;
};

MyCanvasShape.prototype.draw = function(ctx) {
	ctx.beginPath();
	ctx.rect(this.x, this.y, this.width, this.height);
	ctx.closePath();
	return this;
};