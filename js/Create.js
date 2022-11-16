class Create{
    do(){
        game.background.bg = this.add.image(128, 120, 'background');
        game.background.bg2 = this.add.image(384, 120, 'background');
        game.cursors = this.input.keyboard.createCursorKeys();
        game.failText = this.add.text(90, 90, "FAIL!", 
            { font: "40px Arial", fill: "#ff0000", align: "center" });
        game.failText.visible =false;
        game.scoreText = this.add.text(128, 4, "0", 
            { font: "16px Arial", fill: "#ffffff", align: "center" });
        

            
        game.house.deliveredTo = this.physics.add.image(384, 210, 'houseHit');
        game.house.deliverTo = this.physics.add.image(384, 210, 'house');
        game.house.chimney = this.physics.add.image(384, 174, 'chimney'); 
        game.house.init();

        game.jesus.obj = this.physics.add.image(32, LANE[game.jesus.whichLane], 'jesus');	
        game.jesus.init();

        game.jet.obj = this.physics.add.image(200, LANE[0], 'jet');
        game.jet.init();

        game.gift.obj = this.physics.add.image(64, 256, 'gift');
        game.gift.init();
        
        this.physics.add.collider(game.house.deliverTo, game.gift, game.house.hit);
        this.physics.add.collider(game.house.chimney, game.gift, game.house.hitChimney);
        this.physics.add.collider(game.jesus.obj, game.jet.obj, game.jesus.die);
        
    
    }
}