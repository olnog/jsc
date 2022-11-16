class Config {
    scale = {
        autoCenter: Phaser.Scale.CENTER_BOTH,        
	    height: 240,
        mode: Phaser.Scale.FIT,   
        width: 256,
    }
    
	type = Phaser.CANVAS;
	
    
	physics = {
		default: 'arcade',		
        arcade: {
            /*
            debug: true,
            debugShowBody: true,
            debugShowStaticBody: true,
            debugShowVelocity: true,
            debugVelocityColor: 0xffff00,
            debugBodyColor: 0x0000ff,
            debugStaticBodyColor: 0xffffff,
            */
			gravity: { y: 1000 },
		}
	};
	scene = {
		preload: game.preload,
		create: game.create,
		renderer: game.renderer,
		update: game.update,
		
	}
}