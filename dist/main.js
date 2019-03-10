/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\n\nfunction Asteroid(pos,game) {\n  this.COLOR = \"#e45873\";\n  this.RADIUS = 20;\n  MovingObject.call(this, {pos: pos, vel: Util.randomVec(1),\n    radius: this.RADIUS, color: this.COLOR, game: game});\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function(otherObj) {\n  if (otherObj instanceof Ship) {\n    otherObj.relocate();\n  }\n}\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Bullet(pos,vel,game) {\n  this.COLOR = \"black\";\n  this.RADIUS = 4;\n  MovingObject.call(this, {pos: pos, game: game,\n    color: this.COLOR, radius: this.RADIUS, vel: vel});\n}\n\nUtil.inherits(Bullet,MovingObject);\n\nBullet.prototype.collideWith = function(ast) {\n  this.game.remove(ast);\n}\n\nBullet.prototype.inBounds = function() {\n  let xBool = (this.pos[0] >= 0 && this.pos[0] <= this.game.DIM_X);\n  let yBool = (this.pos[1] >= 0 && this.pos[1] <= this.game.DIM_Y);\n  return (xBool && yBool);\n  \n}\n\nBullet.prototype.move = function() {\n  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n}\n\nmodule.exports = Bullet;\n\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Game () {\n  this.DIM_X = canvas.width;\n  this.DIM_Y = canvas.height;\n  this.NUM_ASTEROIDS = 30;\n  this.asteroids = [];\n  this.bullets = [];\n  this.addAsteroids();\n  this.ship = new Ship(this.randomPosition(), this);\n\n}\n\nGame.prototype.randomPosition = function () {\n  const x = Math.floor(Math.random() * this.DIM_X);\n  const y = Math.floor(Math.random() * this.DIM_Y);\n  return [x,y];\n}\n\nGame.prototype.addAsteroids = function() {\n  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {\n    this.asteroids.push(new Asteroid(this.randomPosition(), this));\n  }\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0,0, canvas.width, canvas.height);\n  this.allObjects().forEach((obj) => obj.draw(ctx));\n  this.bullets.forEach((b) => b.draw(ctx));\n}\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach((ast) => {\n    ast.move()\n    ast.pos = this.wrap(ast.pos);\n  });\n  this.bullets.forEach((b) => b.move());\n}\n\nGame.prototype.wrap = function(pos) {\n  if (pos[0] > this.DIM_X) {\n    pos[0] = 0;\n  } else if (pos[1] > this.DIM_Y) {\n    pos[1] = 0;\n  } else if (pos[0] < 0) {\n    pos[0] = this.DIM_X;\n  } else if (pos[1] < 0) {\n    pos[1] = this.DIM_Y;\n  }\n  return pos;\n}\n\nGame.prototype.checkCollisions = function() {\n  let objs = this.allObjects();\n  for (let i = 0; i < objs.length; i++) {\n    for (let j = 0; j < objs.length; j++) {\n      if (i !== j && objs[i].isCollidedWith(objs[j])) {\n        objs[i].collideWith(objs[j]);\n      }\n    }\n  }\n  this.bullets.forEach((b) => {\n    this.asteroids.forEach((ast) => {\n      if (b.isCollidedWith(ast)) {\n        b.collideWith(ast);\n      }\n    });\n  });\n}\n\nGame.prototype.cleanUpBullets = function() {\n  let res = [];\n  this.bullets.forEach((b) => {\n    if (b.inBounds()) {\n      res.push(b);\n    }\n  });\n  this.bullets = res;\n}\n\nGame.prototype.step = function() {\n  this.cleanUpBullets();\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(asteroid) {\n  let idx = this.asteroids.indexOf(asteroid);\n  this.asteroids = this.asteroids.slice(0, idx).concat(this.asteroids.slice(idx + 1));\n}\n\nGame.prototype.allObjects = function() {\n  return this.asteroids.concat([this.ship]);\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.ctx = ctx;\n  this.game = new Game();\n}\n\nGameView.prototype.start = function() {\n  this.bindKeyHandlers();\n  setInterval(() => {\n    this.game.draw(this.ctx);\n    this.game.step();\n  }, 20);\n}\n\nGameView.prototype.bindKeyHandlers = function() {\n  key('b', () => {\n    this.game.ship.fire();\n  });\n  key('k', () => {\n    this.game.ship.power([0,-1]);\n  });\n  key('j', () => {\n    this.game.ship.power([0,1]);\n  });\n  key('h', () => {\n    this.game.ship.power([-1,0]);\n  });\n  key('l', () => {\n    this.game.ship.power([1,0]);\n  });\n}\n  \n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\n\n\nconst canvas = document.querySelector('#canvas');\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nconst ctx = canvas.getContext('2d');\nconst test = new Asteroid([100,100]);\nconst game = new Game();\nconst gv = new GameView(ctx);\n\nconsole.log(game.allObjects());\n\nwindow.onload = gv.start();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/movingObject.js":
/*!*****************************!*\
  !*** ./src/movingObject.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject (options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.moveTo(this.pos[0], this.pos[1]);\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObj) {\n  let x = (this.pos[0] - otherObj.pos[0]) ** 2;\n  let y = (this.pos[1] - otherObj.pos[1]) ** 2;\n\n  const dist = Math.sqrt(x + y);\n  return dist < (this.radius + otherObj.radius);\n}\n\nMovingObject.prototype.collideWith = function(otherObj) {\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/movingObject.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./movingObject */ \"./src/movingObject.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction Ship (pos, game) {\n  this.RADIUS = 7;\n  this.COLOR = \"#468499\";\n  MovingObject.call(this, {pos: pos, game: game, vel: [0,0],\n                          color: this.COLOR, radius: this.RADIUS});\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.move = function() {\n  this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n}\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = [0,0];\n}\nShip.prototype.power = function(impulse) {\n  this.vel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];\n}\nShip.prototype.fire = function() {\n  if (this.vel[0] === 0 && this.vel[1] === 0) return;\n  let v = [this.vel[0] * 2, this.vel[1] * 2];\n  let b = new Bullet(this.pos,v, this.game); \n  this.game.bullets.push(b);\n}\n\n\nmodule.exports = Ship;\n\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    const Surrogate = function(){};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n}\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });