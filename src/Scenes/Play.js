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
    this.starfield =this.add.tileSprite (0,0,game.config.width,game.config.height,'starfield').setOrigin(0,0);    //place starfield
    this.add.rectangle(0,borderUIsize + borderPadding, game.config.width, borderUIsize * 2, 0x00FF00 ).setOrigin(0,0); //green UI
    
    //white Borders
    this.add.rectangle(0,0, game.config.width, borderUIsize * 2, 0xFFFFFF).setOrigin(0,0);
    this.add.rectangle(0,0,borderUIsize, game.config.height - borderUIsize,0xFFFFFF ).setOrigin(0,0);
    this.add.rectangle(0,0,borderUIsize, game.config.height,0xFFFFFF).setOrigin(0,0);
    this.add.rectangle(game.config.width - borderUIsize, 0, borderUIsize, game.config.height, 0xFFFFFF).setOrigin(0,0);

    this.p1Rocket = new Rocket (this, game.config.width/2, game.config.height-borderUIsize-borderPadding,'rocket').setOrigin(0.5,0); //add player 1

    this. ship01 = new Spaceship (this, game.config.width + borderUIsize *6,borderUIsize * 4,'spaceship',0, 30).setOrigin(0,0)
    this. ship02 = new Spaceship (this, game.config.width + borderUIsize *3,borderUIsize * 5,'spaceship',0, 20).setOrigin(0,0)
    this. ship03 = new Spaceship (this, game.config.width + borderUIsize *6,borderUIsize * 4,'spaceship',0, 10).setOrigin(0,0)
    //Define Keys
    keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }
     
  update () {
      this.starfield.tilePositionX -= starSpeed;
      this.p1Rocket.update();
      this.ship01.update()
      this.ship02.update()
  }
   }

  