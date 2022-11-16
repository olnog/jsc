
const HOUSE_SPEED = -150;
const JET_SPEED = -150;
const LANE = [32, 120];
game = new Game()
config = new Config();

ui = new UI()
ui.refresh()


var phaser = new Phaser.Game(config);

function randNum(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}