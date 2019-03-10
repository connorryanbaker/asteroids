const Util = require('./util');
const Ship = require('./ship');
const MovingObject = require('./movingObject');

function Asteroid(pos,game) {
  this.COLOR = "#e45873";
  this.RADIUS = 20;
  MovingObject.call(this, {pos: pos, vel: Util.randomVec(1),
    radius: this.RADIUS, color: this.COLOR, game: game});
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function(otherObj) {
  if (otherObj instanceof Ship) {
    otherObj.relocate();
  }
}

module.exports = Asteroid;
