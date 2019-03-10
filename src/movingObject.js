function MovingObject (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(this.pos[0], this.pos[1]);
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObj) {
  let x = (this.pos[0] - otherObj.pos[0]) ** 2;
  let y = (this.pos[1] - otherObj.pos[1]) ** 2;

  const dist = Math.sqrt(x + y);
  return dist < (this.radius + otherObj.radius);
}

MovingObject.prototype.collideWith = function(otherObj) {
}


module.exports = MovingObject;
