/**
 * Created by The Deceased on 18.06.14.
 */

var MyCanvasCircle = function(x, y, radius) {
	this.make(x, y, radius);
	this.moveToCenter = false;
};

var tempCtor = function () {};
tempCtor.prototype = MyCanvasSector.prototype;
MyCanvasCircle.prototype = new tempCtor();
MyCanvasCircle.prototype.super = MyCanvasSector;

MyCanvasCircle.prototype.make = function(x, y, radius) {
	return this.super.prototype.make.call(this, x, y, radius, 0, 360);
};