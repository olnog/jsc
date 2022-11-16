class Gift{
    obj = null; 

    drop(){
		if (!this.obj.ready){
			return;
		}
		this.obj.body.reset(32, LANE[game.jesus.whichLane]);
		this.obj.ready = false;
	}

    init(){
        this.obj.setBounce(0, .4);
		this.obj.ready = true;
    }
}