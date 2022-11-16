class Game{
	count(){
		game.countdown--;
		game.countdownText.setText(game.countdown);
		if (game.countdown == 0){
			game.countdown = 3;
			game.countdownText.setText(game.countdown);
			
			
			game.hiScoreText.visible = false;
			game.restart();
			return;
		}


		setTimeout(game.count, 1000);
	}
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
		game.background = new Background();
		game.house = new House();
		game.jesus = new Jesus();
		game.jet = new Jet();
		game.gift = new Gift();
		game.countdown = 3;
		game.highScore = 0;
	}

	restart(){
		game.failText.visible = false;
		game.countdownText.visible = false;
		game.giftIcon.visible = true;
		game.house.reset();
		game.house.init();
		game.jesus.obj.body.reset(32, LANE[0]);
		game.jesus.init();
		game.jet.obj.body.reset(384, LANE[0]);
		game.jet.init();
		game.gift.reset();
		game.score = 0;
		game.updateScore();
		phaser.scene.resume('default');

	}

	update(){	
		game.background.update();
		game.house.update();
		game.jet.update();
		var pointer = this.input.activePointer
		if (!pointer.isDown){
		  return
		}	
		if (pointer.y > 160){
			game.gift.drop();
		} else {
			game.jesus.move();
		}
	}

	updateScore(){		
		game.scoreText.setText(game.score  + " (x" + game.gift.successive + ")");
	}
}
