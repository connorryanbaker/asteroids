const Asteroid = require('./asteroid');
const Ship = require('./ship');
const Util = require('./util');

function Game () {
  this.DIM_X = canvas.width;
  this.DIM_Y = canvas.height;
  this.NUM_ASTEROIDS = 30;
  this.asteroids = [];
  this.bullets = [];
  this.addAsteroids();
  this.ship = new Ship(this.randomPosition(), this);

}

Game.prototype.randomPosition = function () {
  const x = Math.floor(Math.random() * this.DIM_X);
  const y = Math.floor(Math.random() * this.DIM_Y);
  return [x,y];
}

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid(this.randomPosition(), this));
  }
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  this.allObjects().forEach((obj) => obj.draw(ctx));
  this.bullets.forEach((b) => b.draw(ctx));
}

Game.prototype.moveObjects = function() {
  this.allObjects().forEach((ast) => {
    ast.move()
    ast.pos = this.wrap(ast.pos);
  });
  this.bullets.forEach((b) => b.move());
}

Game.prototype.wrap = function(pos) {
  if (pos[0] > this.DIM_X) {
    pos[0] = 0;
  } else if (pos[1] > this.DIM_Y) {
    pos[1] = 0;
  } else if (pos[0] < 0) {
    pos[0] = this.DIM_X;
  } else if (pos[1] < 0) {
    pos[1] = this.DIM_Y;
  }
  return pos;
}

Game.prototype.checkCollisions = function() {
  let objs = this.allObjects();
  for (let i = 0; i < objs.length; i++) {
    for (let j = 0; j < objs.length; j++) {
      if (i !== j && objs[i].isCollidedWith(objs[j])) {
        objs[i].collideWith(objs[j]);
      }
    }
  }
  this.bullets.forEach((b) => {
    this.asteroids.forEach((ast) => {
      if (b.isCollidedWith(ast)) {
        b.collideWith(ast);
      }
    });
  });
}

Game.prototype.cleanUpBullets = function() {
  let res = [];
  this.bullets.forEach((b) => {
    if (b.inBounds()) {
      res.push(b);
    }
  });
  this.bullets = res;
}

Game.prototype.step = function() {
  this.cleanUpBullets();
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
  let idx = this.asteroids.indexOf(asteroid);
  this.asteroids = this.asteroids.slice(0, idx).concat(this.asteroids.slice(idx + 1));
}

Game.prototype.allObjects = function() {
  return this.asteroids.concat([this.ship]);
}

module.exports = Game;
