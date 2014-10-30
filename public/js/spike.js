var canvas = document.getElementById('roomCanvas'),
    ctx = canvas.getContext('2d');



canvas.width = 600;
canvas.height = 800;

var bgImage = new Image();
bgImage.onload = function() {
  ctx.drawImage(bgImage, 0, 0, 700, 900);
  container.redraw();
}
bgImage.src = "resources/floorplan_big.png"

var container = new CanvasLayers.Container(canvas, true);
container.onRender = function(layer, rect, context) {
}


var roomLayer = new CanvasLayers.Layer(40, 20, 160, 120);
container.getChildren().add(roomLayer);

roomLayer.onRender = function(layer, rect, context) {
    context.fillStyle='rgba(0, 0, 255, 0.5)';
    context.fillRect(layer.getX(), layer.getY(), layer.getWidth(), layer.getHeight());
}


