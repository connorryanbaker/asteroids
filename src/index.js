const MovingObject = require('./movingObject');
const Asteroid = require('./asteroid');
const Game = require('./game');
const GameView = require('./game_view');



const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
const test = new Asteroid([100,100]);
const game = new Game();
const gv = new GameView(ctx);

console.log(game.allObjects());

window.onload = gv.start();
