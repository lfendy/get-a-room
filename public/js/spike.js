var canvas = document.getElementById('roomCanvas'),
    ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var bgImage = new Image();
bgImage.onload = function() {
  ctx.drawImage(bgImage, 0, 0, Math.min(bgImage.width, canvas.width), Math.min(bgImage.height, canvas.height));
  container.redraw();
}
bgImage.src = "resources/floorplan_big.png"

var drawRect = function(context, color, x, y, width, height) {
    context.fillStyle=color;
    context.fillRect(x, y, width, height);
}

var container = new CanvasLayers.Container(canvas, false);
container.onRender = function(layer, rect, context) {
}

var roomLayer = new CanvasLayers.Layer(0, 0, canvas.width, canvas.height);
container.getChildren().add(roomLayer);

roomLayer.onRender = function(layer, rect, context) {
  drawRect(context, 'rgba(0, 255, 255, 0.5)', 0, 30, 300, 230);
  drawRect(context, 'rgba(0, 0, 255, 0.5)', 0, 350, 100, 230);
}

