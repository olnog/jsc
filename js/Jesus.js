class Jesus {
	obj = null;
	whichLane = 0;
	
    die(){
		game.failText.visible = true;
		//phaser.registry.destroy(); 
		//phaser.events.off();
		//config.scene.restart();
		location.reload();
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