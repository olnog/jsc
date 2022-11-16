class Jet {
	obj = null;
    init(){
		this.obj.body.setAllowGravity(false);
		this.obj.body.setImmovable(true);
		this.obj.body.setVelocityX(JET_SPEED);
    }

    update(){
        if (this.obj.x < -32){
			this.obj.x = randNum(256, 1024);
			let highOrLow = randNum(0, 1);			
			this.obj.setVelocityX(JET_SPEED);
			if (highOrLow == 1){
				this.obj.setVelocityX(JET_SPEED * 2);
			}
			this.obj.y = LANE[highOrLow];
		}
    }
}