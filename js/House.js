class House {
    chimney = null;
    delivered = null;
    deliverTo = null;

    hitChimney(chimney, gift){
		if (!chimney.body.touching.up || chimney.wasHit){
			return;
		}
		game.gift.successive++;
		game.house.deliveredTo.visible = true;
		game.house.deliverTo.visible = false;
		if (!chimney.wasHit && !game.house.deliverTo.wasHit && game.gift.droppedFrom == 0){
			game.score += (10 * game.gift.successive);				
		} else if (!chimney.wasHit && !game.house.deliverTo.wasHit && game.gift.droppedFrom == 1){
			game.score += (2 * game.gift.successive);				
		} else if (!chimney.wasHit){
			game.score += game.gift.successive;
		}
		chimney.wasHit = true;
		gift.visible = false;
		gift.y = 1000;
		game.updateScore();
	}
	
	hit(houseHit, gift){
		if (!houseHit.wasHit && houseHit.body.touching.up){
			houseHit.wasHit = true;
		}
		
	}

    init(){
		this.deliveredTo.body.setAllowGravity(false);
		this.deliveredTo.body.setImmovable(true);
		this.deliveredTo.body.setVelocityX(HOUSE_SPEED);
		this.deliveredTo.visible = false;
		
		this.deliverTo.body.setAllowGravity(false);
		this.deliverTo.body.setImmovable(true);
		this.deliverTo.body.setVelocityX(HOUSE_SPEED);
		this.deliverTo.wasHit = false;

		//left edge 128 / 50 = -78
		//right edge 210 / 200 = 72
		this.chimney.body.setAllowGravity(false);
		this.chimney.body.setImmovable(true);
		this.chimney.body.setVelocityX(HOUSE_SPEED);
		this.chimney.wasHit = false;        
    }

	reset(){
		this.deliveredTo.body.reset(384, 210, 'houseHit');
        this.deliverTo.body.reset(384, 210, 'house');
        this.chimney.body.reset(384, 174, 'chimney'); 
	}

    update(){
        if (this.deliverTo.x <= -128){
			game.gift.reset();
			game.updateScore();
			let randPos = 384 +randNum(1,256);
			this.deliverTo.x = randPos;
			this.deliveredTo.x = randPos;
			this.chimney.x = randPos + randNum(-60, 72);
			this.deliverTo.wasHit = false;
			this.chimney.wasHit = false;
			
			this.deliverTo.visible = true;
			this.deliveredTo.visible = false;
		}
    }
}