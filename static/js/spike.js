var canvas = document.getElementById('roomCanvas'),
    ctx = canvas.getContext('2d');


canvas.width = 600;
canvas.height = 700;

bgImage = document.getElementById('background');
ctx.drawImage(bgImage, 0, 0);

var container = new CanvasLayers.Container(canvas, false);
container.onRender = function(layer, rect, context) {
}

var roomLayer = new CanvasLayers.Layer(40, 20, 160, 120);
container.getChildren().add(roomLayer);

roomLayer.onRender = function(layer, rect, context) {
    context.fillStyle="#FF0000";
    context.fillRect(layer.getX(), layer.getY(), layer.getWidth(), layer.getHeight());
}

container.redraw();



