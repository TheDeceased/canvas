/**
 * Created by The Deceased on 17.06.14.
 */

var MyCanvasRect = function(x, y, width, height) {
	this.make(x, y, width, height);
};

MyCanvasRect.prototype = new MyCanvasShape();

MyCanvasRect.prototype.x = 0;
MyCanvasRect.prototype.y = 0;
MyCanvasRect.prototype.width = 0;
MyCanvasRect.prototype.height = 0;

MyCanvasRect.prototype.make = function(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	return this;
};

MyCanvasRect.prototype.draw = function(ctx) {
	if (this.mustBeFilled || !this.mustBeStroked) {
		ctx.fillStyle = this.fillColor;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	if (this.mustBeStroked) {
		ctx.lineWidth = this.lineWidth;
		ctx.strokeStyle = this.strokeColor;
		ctx.strokeRect(this.x, this.y, this.width, this.height);
	}
	return this;
};