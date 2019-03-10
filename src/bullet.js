const MovingObject = require('./movingObject');
const Asteroid = require('./asteroid');
const Util = require('./util');

function Bullet(pos,vel,game) {
  this.COLOR = "black";
  this.RADIUS = 4;
  MovingObject.call(this, {pos: pos, game: game,
    color: this.COLOR, radius: this.RADIUS, vel: vel});
}

Util.inherits(Bullet,MovingObject);

Bullet.prototype.collideWith = function(ast) {
  this.game.remove(ast);
}

Bullet.prototype.inBounds = function() {
  let xBool = (this.pos[0] >= 0 && this.pos[0] <= this.game.DIM_X);
  let yBool = (this.pos[1] >= 0 && this.pos[1] <= this.game.DIM_Y);
  return (xBool && yBool);
  
}

Bullet.prototype.move = function() {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
}

module.exports = Bullet;
