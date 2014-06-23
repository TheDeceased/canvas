/**
 * Created by The Deceased on 23.06.14.
 */

var MyCanvasPolygonEq = function(x, y, radius, sides, startAngle) {
	this.make(x, y, radius, sides, startAngle);
};

MyCanvasPolygonEq.prototype = new MyCanvasShape();

MyCanvasSector.prototype.x = 0;
MyCanvasSector.prototype.y = 0;
MyCanvasSector.prototype.radius = 0;
MyCanvasSector.prototype.startAngle = 0;
MyCanvasSector.prototype.endAngle = 0;

MyCanvasPolygonEq.prototype.make = function(x, y, radius, sides, startAngle) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.sides = sides;
	this.startAngle = startAngle;
	return this;
};

MyCanvasPolygonEq.prototype.draw = function(ctx) {
	// TODO: move to construct and throw exception on lower values
	if (this.sides < 3) return this;

	var arcLength = (Math.PI * 2)/this.sides;

//	arcLength = anticlockwise?-arcLength:arcLength;

	ctx.save();

	ctx.translate(this.x, this.y);
	ctx.rotate(this.startAngle);
	for (var i = 1; i <= this.sides; i++) {
		ctx.lineTo(this.radius * Math.cos(arcLength * i), this.radius * Math.sin(arcLength * i));
	}
	ctx.closePath();
	ctx.restore();

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