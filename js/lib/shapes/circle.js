/**
 * Created by safronov on 18.06.14.
 */

var MyCanvasCircle = function(x, y, radius) {
	this.create(x, y, radius);
};

var tempCtor = function () {};
tempCtor.prototype = MyCanvasSector.prototype;

MyCanvasCircle.prototype = new tempCtor();

MyCanvasCircle.prototype.super = MyCanvasSector;

MyCanvasCircle.prototype.x = 0;
MyCanvasCircle.prototype.y = 0;
MyCanvasCircle.prototype.radius = 0;

MyCanvasCircle.prototype.create = function(x, y, radius) {
	this.super.prototype.create.call(this, x, y, radius, 0, 0);
	return this;
};

MyCanvasCircle.prototype.draw = function(ctx) {
	this.super.prototype.draw.call(this, ctx);
//	ctx.beginPath();
//	ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
//	ctx.closePath();
//	if (this.mustBeFilled || !this.mustBeStroked) {
//		ctx.fillStyle = this.fillColor;
//		ctx.fill();
//	}
//	if (this.mustBeStroked) {
//		ctx.lineWidth = this.lineWidth;
//		ctx.strokeStyle = this.strokeColor;
//		ctx.stroke();
//	}
	return this;
};