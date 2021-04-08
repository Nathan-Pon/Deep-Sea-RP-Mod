class Play extends Phaser.Scene {
    constructor() {
        super ("playScene");
    }   
    preload() {
     this.load.image('rocket', './assets/rocket.png');   
     this.load.image('spaceship','./assets/spaceship.png');
     this.load.image('starfield','./assets/starfield.png');
    
    }

   create () { 
    this.starfield =this.add.tileSprite (0,0,game.config.width,game.config.height,'starfield').setOrigin(0,0);    
    this.add.rectangle(0,borderUIsize + borderPadding, game.config.width, borderUIsize * 2, 0x00FF00 ).setOrigin(0,0);
    this.add.rectangle(0,0, game.config.width, borderUIsize * 2, 0xFFFFFF).setOrigin(0,0);
    this.add.rectangle(0,0,borderUIsize, game.config.height- borderUIsize,0xFFFFFF ).setOrigin(0,0);
    this.add.rectangle(game.config.width - borderUIsize, 0, borderUIsize, game.config.height, 0xFFFFF).setOrigin(0,0);
  }
  update () {
      this.starfield.tilePositionX -= starSpeed;
  }
   }
