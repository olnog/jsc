class Background{
    bg = null;
    bg2 = null;    

    update(){
        this.bg.x--;
		this.bg2.x--;
		if (this.bg.x == -128){
			this.bg.x = 384;
		}
		if (this.bg2.x == -128){
			this.bg2.x = 384;
		}
    }
}