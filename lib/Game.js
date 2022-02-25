const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  // destructure name from the prompt object
  .then(({ name }) => {
    this.player = new Player(name);

    // test the object creation
    console.log(this.currentEnemy, this.player);
  });

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

module.exports = Game;

Game.prototype.initializeGame = function() {

};