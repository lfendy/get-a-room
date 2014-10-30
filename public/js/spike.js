var draw = function(){
  var magicWidth = 846;
  var magicHeight = 1159
  var aspectRatio = magicHeight / magicWidth;
  var magicNumberExtraHeightScale = 1.2;
  var canvas = document.getElementById('roomCanvas'),
  ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = magicNumberExtraHeightScale * aspectRatio * canvas.width;

  var bgImage = new Image();
  bgImage.onload = function() {
    var width = canvas.width;
    var height = aspectRatio * width
    canvas.height = height;
    ctx.drawImage(bgImage, 0, 0, width, height);
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

  var colorRed =  'rgba(255, 0, 0, 0.3)';
  var colorGreen =  'rgba(0, 255, 0, 0.3)';

  var boardRoom = {
    x: 0,
    y: 0,
    width: 440,
    height: 430,
    color: colorGreen
  };

  var boardRoomHack = {
    x: 440,
    y: 85,
    width: 75,
    height: 260,
    color: colorGreen
  };

  var room1 = {
    x: 475,
    y: 515,
    width: 150,
    height: 255,
    color: colorGreen
  };

  var room2 = {
    x: 650,
    y: 530,
    width: 163,
    height: 255,
    color: colorRed
  };

  var room3 = {
    x: 0,
    y: 430,
    width: 183,
    height: 385,
    color: colorRed
  };

  var room4 = {
    x: 0,
    y: 816,
    width: 183,
    height: 385,
    color: colorRed
  };

  var room5 = {
    x: 255,
    y: 856,
    width: 185,
    height: 130,
    color: colorRed
  };

  var room6 = {
    x: 255,
    y: 987,
    width: 185,
    height: 170,
    color: colorGreen
  };

  var scaleRoom = function(room, scale) {
    return {
      x: room.x * scale,
      y: room.y * scale,
      width: room.width * scale,
      height: room.height * scale,
      color: room.color
    };
  };

  var drawRoom = function(context, givenRoom){
    var scale = window.innerWidth / magicWidth;
    var room = scaleRoom(givenRoom, scale);
    drawRect(context, room.color, room.x, room.y, room.width, room.height);
  };

  roomLayer.onRender = function(layer, rect, context) {
    drawRoom(context, boardRoom);
    drawRoom(context, boardRoomHack);
    drawRoom(context, room1);
    drawRoom(context, room2);
    drawRoom(context, room3);
    drawRoom(context, room4);
    drawRoom(context, room5);
    drawRoom(context, room6);
  };



};
