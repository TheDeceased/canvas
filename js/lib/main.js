/**
 * Created by The Deceased on 16.06.14.
 */

var MyCanvas = function(parent) {
	this.create(parent);
};

MyCanvas.prototype.create = function(parent) {
	var canvas  = document.createElement('canvas');
	var that = this;
	window.onresize = function(){that.resize(canvas)};
	this.resize(canvas, parent);
	if (!parent) {
		parent = document.getElementsByTagName('body')[0];
	}
	parent.appendChild(canvas);
	return this;
};

MyCanvas.prototype.resize = function(canvas, parent) {
	canvas.width = window.innerWidth/* - 4*/;
	canvas.height = window.innerHeight/* - 4*/;
};

MyCanvas.prototype.start = function(ticker) {
//	ticker.
};
