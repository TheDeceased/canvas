var canvas = new MyCanvas();

var rect = new MyCanvasRect(100, 100, 400, 200);
rect.fill('#069')
	.setLineWidth(5)
    .stroke('#096');
canvas.addShape(rect);

var circle = new MyCanvasCircle(600, 100, 50);
circle.fill('#c7c7c7')
	.setLineWidth(3)
	.stroke('#963535');
canvas.addShape(circle);

var sector = new MyCanvasSector(750, 100, 50, 0, 96);
sector.fill('#c7c7c7')
	.setLineWidth(3)
	.stroke('#963535');
canvas.addShape(sector);

var square = new MyCanvasSquare (0, 0, 50);
square.fill('#cecece')
	.setLineWidth(1)
	.stroke('#900');
canvas.addShape(square);

var polygon = new MyCanvasPolygonEq(350, 400, 75, 6, 0);
polygon.fill('#cecece')
	.setLineWidth(1)
	.stroke('#900');
canvas.addShape(polygon);

canvas.draw();
