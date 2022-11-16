class Jesus {
	obj = null;
	whichLane = 0;
	
    die(){
		game.failText.visible = true;
		//phaser.registry.destroy(); 
		//phaser.events.off();
		//config.scene.restart();
		//location.reload();
		console.log(game.failText.visible);
		phaser.scene.pause('default');
		game.hiScoreText.visible = true;
		let msg = "High score: ";
		if (game.score > game.highScore){
			game.highScore = game.score;
		}
		game.hiScoreText.setText(msg + " " + game.highScore + "" )
		game.countdownText.visible = true;
		setTimeout(game.count, 1000);
		//game.restart();
	}

    init(){
		this.obj.body.setAllowGravity(false);
		this.obj.moved = Date.now();	
    }

	move(){
		if (Date.now() - this.obj.moved < 250){
			return;
		}
		this.obj.moved = Date.now();
		if (this.whichLane == 1){
			this.whichLane = 0;
		} else {
			this.whichLane = 1;
		}
		this.obj.y = LANE[this.whichLane];
	}
}