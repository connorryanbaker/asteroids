const Game = require('./game');

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game();
}

GameView.prototype.start = function() {
  this.bindKeyHandlers();
  setInterval(() => {
    this.game.draw(this.ctx);
    this.game.step();
  }, 20);
}

GameView.prototype.bindKeyHandlers = function() {
  key('b', () => {
    this.game.ship.fire();
  });
  key('k', () => {
    this.game.ship.power([0,-1]);
  });
  key('j', () => {
    this.game.ship.power([0,1]);
  });
  key('h', () => {
    this.game.ship.power([-1,0]);
  });
  key('l', () => {
    this.game.ship.power([1,0]);
  });
}
  

module.exports = GameView;
