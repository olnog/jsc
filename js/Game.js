class Game{
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
		game.scoreText.setText(game.score);
	}
}
