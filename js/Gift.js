class Gift{
    obj = null; 
	droppeDFrom = null;
	successive = 0;
    drop(){
		if (!this.obj.ready){
			return;
		}
		this.droppedFrom = game.jesus.whichLane;
		this.obj.body.reset(32, LANE[game.jesus.whichLane]);
		this.obj.ready = false;
		game.giftIcon.visible = false;
	}

    init(){
        this.obj.setBounce(0, .4);
		this.obj.ready = true;
    }
	reset(){
		this.obj.ready = true;
		this.obj.visible = true;
		this.droppedFrom = null;
		if (!game.house.chimney.wasHit){			
			this.successive = 0;
		}
		game.giftIcon.visible = true;
	}
}