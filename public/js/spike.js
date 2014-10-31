var spike = spike || {};

spike.draw = function(givenRoomAvailabilityMap){
  var roomColorMap = givenRoomAvailabilityMap ||
    {
    boardRoom: true,
    room1: false,
    room2: false,
    room3: true,
    room4: true,
    room5: false,
    room6: false
  };

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

  var boardRoom = {
    x: 0,
    y: 0,
    width: 440,
    height: 430,
  };

  var boardRoomHack = {
    x: 440,
    y: 85,
    width: 75,
    height: 260,
  };

  var room1 = {
    x: 475,
    y: 515,
    width: 150,
    height: 255,
  };

  var room2 = {
    x: 625,
    y: 515,
    width: 147,
    height: 255,
  };

  var room3 = {
    x: 0,
    y: 430,
    width: 183,
    height: 385,
  };

  var room4 = {
    x: 0,
    y: 816,
    width: 183,
    height: 385,
  };

  var room5 = {
    x: 255,
    y: 856,
    width: 185,
    height: 130,
  };

  var room6 = {
    x: 255,
    y: 987,
    width: 185,
    height: 170,
  };

  function isInRoom(room, x, y) {
    if ((x > room.x) && (x < (room.x + room.width)) && (y > room.y) && (y < (room.y + room.height))) {
       return true;
    }
    return false;
  }

  function getRoomFromMouseClick(x, y) {
    if (isInRoom(boardRoom, x, y) || isInRoom(boardRoomHack, x, y)) {
	return "boardRoom";
    } else if (isInRoom(room1, x, y) {
	return "room1";
    } else if (isInRoom(room2, x, y) {
	return "room2";
    } else if (isInRoom(room3, x, y) {
	return "room3";
    } else if (isInRoom(room4, x, y) {
	return "room4";
    } else if (isInRoom(room5, x, y) {
	return "room5";
    } else if (isInRoom(room6, x, y) {
	return "room6";
    } else {
        return "Not in any room";
    }
	
    
  }


  var scaleRoom = function(room, scale) {
    return {
      x: room.x * scale,
      y: room.y * scale,
      width: room.width * scale,
      height: room.height * scale,
      color: room.color
    };
  };

  var reColorRoom = function(room, newColor) {
    return {
      x: room.x,
      y: room.y,
      width: room.width,
      height: room.height,
      color: newColor
    };
  };

  var makeBusy = function(room){
    var colorRed =  'rgba(255, 0, 0, 0.3)';
    return reColorRoom(room, colorRed);
  };

  var makeFree = function(room){
    var colorGreen =  'rgba(0, 255, 0, 0.3)';
    return reColorRoom(room, colorGreen);
  };

  var drawRoom = function(context, givenRoom, available){
    var scale = window.innerWidth / magicWidth;
    var room = scaleRoom(givenRoom, scale);
    room = available ? makeFree(room) : makeBusy(room);
    drawRect(context, room.color, room.x, room.y, room.width, room.height);
  };

  roomLayer.onRender = function(layer, rect, context) {
    drawRoom(context, boardRoom, roomColorMap.boardRoom);
    drawRoom(context, boardRoomHack, roomColorMap.boardRoom);
    drawRoom(context, room1, roomColorMap.room1);
    drawRoom(context, room2, roomColorMap.room2);
    drawRoom(context, room3, roomColorMap.room3);
    drawRoom(context, room4, roomColorMap.room4);
    drawRoom(context, room5, roomColorMap.room5);
    drawRoom(context, room6, roomColorMap.room6);
  };

};
