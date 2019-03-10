const MovingObject = require('./movingObject');
const Util = require('./util');
const Bullet = require('./bullet');

function Ship (pos, game) {
  this.RADIUS = 7;
  this.COLOR = "#468499";
  MovingObject.call(this, {pos: pos, game: game, vel: [0,0],
                          color: this.COLOR, radius: this.RADIUS});
}

Util.inherits(Ship, MovingObject);

Ship.prototype.move = function() {
  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
}
Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = [0,0];
}
Ship.prototype.power = function(impulse) {
  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];
}
Ship.prototype.fire = function() {
  if (this.vel[0] === 0 && this.vel[1] === 0) return;
  let v = [this.vel[0] * 2, this.vel[1] * 2];
  let b = new Bullet(this.pos,v, this.game); 
  this.game.bullets.push(b);
}


module.exports = Ship;
