class Game{
	constructor(){

	}

	
	bg = null;
	chimney = null;
	cursors = null;
	failText = null;
	gift = null;
	house = null;
	jesus = null;
	
	scoreText = null;
	score = [];
	whereIsJesus = null;
	preload (){
		this.load.setBaseURL('http://192.168.1.136/jsc');		
		this.load.image('background', 'assets/night.png');
		this.load.image('house', 'assets/house1.png');
		this.load.image('houseHit', 'assets/houseHit.png');

		this.load.image('jesus', 'assets/jesus.png');
		this.load.image('chimney', 'assets/chimney.png');
		this.load.image('gift', 'assets/gift.png');
		this.load.image('jet', 'assets/jet.png');
		game.score = 0;
		game.houses = 0;
	}

	dropGift(){
		if (!game.gift.ready){
			return;
		}
	//	if (this.gift.ready && this.cursors.space.isDown){
			game.gift.body.reset(32, game.whereIsJesus);
			game.gift.ready = false;
	//	}
	}

	create(){
		
		game.whereIsJesus = LANE[0];
		this.cursors = this.input.keyboard.createCursorKeys();
		this.bg = this.add.image(128, 120, 'background');




		this.bg2 = this.add.image(384, 120, 'background');
		this.bg2.setInteractive();
		game.failText = this.add.text(90, 90, "FAIL!", 
			{ font: "40px Arial", fill: "#ff0000", align: "center" });
		game.failText.visible =false;
		game.scoreText = this.add.text(128, 4, "0%", 
			{ font: "8px Arial", fill: "#ffffff", align: "center" });
		
		game.houseHit = this.physics.add.image(384, 210, 'houseHit');
		game.houseHit.body.setAllowGravity(false);
		game.houseHit.body.setImmovable(true);
		game.houseHit.body.setVelocityX(HOUSE_SPEED);
		game.houseHit.visible = false;

		game.house = this.physics.add.image(384, 210, 'house');
		game.house.body.setAllowGravity(false);
		game.house.body.setImmovable(true);
		game.house.body.setVelocityX(HOUSE_SPEED);
		game.house.wasHit = false;


//		new Phaser.Geom.Rectangle(0, 0, this.bg.width, 80, '#ffffff')
		this.chimney = this.physics.add.image(384, 174, 'chimney'); 
		//left edge 128 / 50 = -78
		//right edge 210 / 200 = 72
		this.chimney.body.setAllowGravity(false);
		this.chimney.body.setImmovable(true);
		this.chimney.body.setVelocityX(HOUSE_SPEED);
		this.chimney.wasHit = false;
		game.jesus = this.physics.add.image(32, game.whereIsJesus, 'jesus');	
		game.jesus.body.setAllowGravity(false);
		game.jesus.moved = Date.now();	
		
		this.jet = this.physics.add.image(200, LANE[0], 'jet');
		this.jet.body.setAllowGravity(false);
		this.jet.body.setImmovable(true);
		this.jet.body.setVelocityX(JET_SPEED);
		game.gift = this.physics.add.image(64, 256, 'gift');
		game.gift.setBounce(0, .4);
		game.gift.ready = true;
		this.physics.add.collider(game.house, game.gift, game.hitHouse);
		this.physics.add.collider(this.chimney, game.gift, game.hitChimney);
		this.physics.add.collider(game.jesus, this.jet, game.die);
		
	}


	die(){
		game.failText.visible = true;
		//phaser.registry.destroy(); 
		//phaser.events.off();
		//config.scene.restart();
		location.reload();
		console.log(config.scene);
	}

	hitChimney(chimney, gift){
		if (!chimney.body.touching.up || chimney.wasHit){
			return;
		}
		
		game.houseHit.visible = true;
		game.house.visible = false;
		if (!chimney.wasHit && !game.house.wasHit ){
			game.score += 10;				
		}
		if (!chimney.wasHit && game.house.wasHit ){
			game.score++;
		}


		chimney.wasHit = true;
		gift.visible = false;
		gift.y = 1000;
		game.updateScore();
	}
	
	hitHouse(house, gift){
		
		if (!house.wasHit && house.body.touching.up){
			house.wasHit = true;
		}
		
	}

	hitJesus(jesus, jet){
		game.die();
	}

	move(){
		if (Date.now() - game.jesus.moved < 250){
			return;
		}
		game.jesus.moved = Date.now();
		if (game.whereIsJesus == LANE[1]){
			game.whereIsJesus = LANE[0];
		} else {
			game.whereIsJesus = LANE[1];
		}
		game.jesus.y = game.whereIsJesus;
	}

	update(){	
		//console.log(this.jet.x, this.jet.y);
		if (game.house.x <= -128){
			game.houses++;
			game.updateScore();
			let randPos = 384 +randNum(1,256);
			game.house.x = randPos;
			game.houseHit.x = randPos;
			this.chimney.x = randPos + randNum(-60, 72);
			game.house.wasHit = false;
			this.chimney.wasHit = false;
			game.gift.ready = true;
			game.gift.visible = true;
			game.house.visible = true;
			game.houseHit.visible = false;
		}
		if (this.jet.x < -32){
			this.jet.x = randNum(256, 1024);
			let highOrLow = randNum(0, 1);			
			this.jet.setVelocityX(JET_SPEED);
			if (highOrLow == 1){
				this.jet.setVelocityX(JET_SPEED * 2);
			}
			this.jet.y = LANE[highOrLow];
		}
		this.bg.x--;
		this.bg2.x--;
		if (this.bg.x == -128){
			this.bg.x = 384;
		}
		if (this.bg2.x == -128){
			this.bg2.x = 384;
		}


		var pointer = this.input.activePointer
		if (!pointer.isDown){
		  return
		}	
		if (pointer.y > 160){
			game.dropGift();
		} else {
			game.move();
		}

	}

	updateScore(){		
		game.scoreText.setText(game.score);
	}
}
