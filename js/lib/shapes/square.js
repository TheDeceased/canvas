/**
 * Created by The Deceased on 20.06.14.
 */

var MyCanvasSquare = function(x, y, size) {
	this.make(x, y, size);
};

var tempCtor = function () {};
tempCtor.prototype = MyCanvasRect.prototype;
MyCanvasSquare.prototype = new tempCtor();
MyCanvasSquare.prototype.super = MyCanvasRect;

MyCanvasSquare.prototype.make = function(x, y, size) {
	return this.super.prototype.make.call(this, x, y, size, size);
};