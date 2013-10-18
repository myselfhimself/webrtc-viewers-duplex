/**
 * Simple game server when players join in through index.html by providing a player name
 * and watchers join in through game.html without providing anything.
 *
 * When players are in the game, they hit a button to run.
 * Watchers see players running.
 */
var io = require('socket.io').listen(8080);

// Players have a name and can run!
// structure: property name: socket.id, property value: player name.
var players = {};

// People looking at the game.
// structure: no key, only vals (socket.idS).
var watchers = [];


function tellWatchers(msg) {
  console.log("Sending message to all watchers: "+msg);
  for(var w=0; w<watchers.length; w++) {
    io.sockets.socket(watchers[w]).emit('game status', msg);
  }
}



io.sockets.on('connection', function (socket) {
  // When a player says he is ready, start the game (TODO await more players).
  socket.on('player ready', function (player_name) {
    console.log('Player ' + player_name + ' is ready!');
    players[socket.id] = player_name;

    console.log('Starting the game !');
    socket.emit('game start');
  });

  // When a player runs... he runs, and the watchers know it!
  socket.on('player run', function () {
    msg = 'test supervisor Player ' + players[socket.id] + ' runs !';
    tellWatchers(msg);
  });

  // When a client says he wants to be watcher, subscribe him to the watchers
  // list.
  socket.on('watcher ready', function() {
    watchers[watchers.length] = socket.id;
    console.log('One watcher starts following the game!');
  });

  // Unsubscribe watchers and players as they disconnect.
  socket.on('disconnect', function() {
    if(socket.id in players) {
      console.log('Player ' + players[socket.id] + ' leaves the game !');
      delete players[socket.id];
    }

    watcherId = watchers.indexOf(socket.id);
    if(watcherId != -1) {
      console.log('One watcher leaves the game!');
      watchers.splice(watcherId, 1);
    }
  });
});
