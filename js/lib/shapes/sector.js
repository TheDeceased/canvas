/**
 * Created by The Deceased on 18.06.14.
 */

var MyCanvasSector = function(x, y, radius, startAngle, endAngle) {
	this.make(x, y, radius, startAngle, endAngle);
	this.moveToCenter = true;
};

MyCanvasSector.prototype = new MyCanvasShape();

MyCanvasSector.prototype.x = 0;
MyCanvasSector.prototype.y = 0;
MyCanvasSector.prototype.radius = 0;
MyCanvasSector.prototype.startAngle = 0;
MyCanvasSector.prototype.endAngle = 0;

MyCanvasSector.prototype.make = function(x, y, radius, startAngle, endAngle) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	return this;
};

MyCanvasSector.prototype.draw = function(ctx) {
	ctx.beginPath();
	if (this.moveToCenter) {
		ctx.moveTo(this.x, this.y);
	}
	ctx.arc(this.x, this.y, this.radius, this.convertToRadians(this.startAngle), this.convertToRadians(this.endAngle), false);
	ctx.closePath();
	if (this.mustBeFilled || !this.mustBeStroked) {
		ctx.fillStyle = this.fillColor;
		ctx.fill();
	}
	if (this.mustBeStroked) {
		ctx.lineWidth = this.lineWidth;
		ctx.strokeStyle = this.strokeColor;
		ctx.stroke();
	}
	return this;
};

MyCanvasSector.prototype.convertToRadians = function(degrees) {
	return degrees * Math.PI / 180;
};