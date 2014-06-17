var canvas = new MyCanvas();

var rect = new MyCanvasRect(100, 100, 400, 200);
rect.fill('#069')
	.setLineWidth(5)
    .stroke('#096');
canvas.addShape(rect);
canvas.draw();
