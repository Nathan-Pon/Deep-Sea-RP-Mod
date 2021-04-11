class Play extends Phaser.Scene {
    constructor() {
        super ("playScene");
    }   
    preload() {
     this.load.image('rocket', './assets/rocket.png');   
     this.load.image('spaceship','./assets/spaceship.png');
     this.load.image('starfield','./assets/starfield.png');
    
     this.load.spritesheet('explosion', './assets/explosion.png', {frameWidth: 64, frameHeight: 32, startFrame: 0, endFrame: 9});   
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

    this.ship01 = new Spaceship (this, game.config.width + borderUIsize*6, borderUIsize*4,'spaceship',0, 30).setOrigin(0,0)
    this.ship02 = new Spaceship (this, game.config.width + borderUIsize*3, borderUIsize*5 + borderPadding*2,'spaceship',0, 20).setOrigin(0,0)
    this.ship03 = new Spaceship (this, game.config.width, borderUIsize*6 + borderPadding*4,'spaceship',0, 10).setOrigin(0,0)
   
    //Define Keys
    keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 9, first: 0}),
      frameRate: 30
  });

  this.p1Score = 0;  //intialize score

  //display Score
  let displayScore = {
  fontFamily: 'Courier',
  fontSize: '28px',
  backgroundColor: 'F3B141',
  color: '843605',
  align: 'right',
  padding: {
    top: 5,
    bottom: 5,
  },
  fixedWidth: 100

  } 
this.scoreLeft = this.add.text(borderUIsize + borderPadding, borderUIsize + borderPadding*2, this.p1Score, displayScore);

  }
 
  
  update () {
      this.starfield.tilePositionX -= starSpeed;
      this.p1Rocket.update();
      this.ship01.update();
      this.ship02.update();
      this.ship03.update();
    
      if(this.detectCollision(this.p1Rocket, this.ship03)) {
        this.p1Rocket.reset();
        this.shipExplode(this.ship03);   
       
      }
      if (this.detectCollision(this.p1Rocket, this.ship02)) {
        this.p1Rocket.reset();
        this.shipExplode(this.ship02);   
      }
      if (this.detectCollision(this.p1Rocket, this.ship01)) {
        this.p1Rocket.reset();
        this.shipExplode(this.ship01);  
      }

  }

  detectCollision (rocket,ship) {
  if(rocket.x < ship.x + ship.width && 
    rocket.x + rocket.width > ship.x &&
    rocket.y < ship.y + ship.height &&
    rocket.height + rocket.y > ship.y) {
        return true;
    }
    else {
        return false;
    }
  }
  shipExplode (ship) {
    ship.alpha = 0;

    let explode = this.add.sprite (ship.x, ship.y, 'explosion').setOrigin(0,0);
    explode.anims.play ('explode')
    explode.on ('animationcomplete', () => {
     ship.reset();                         // reset ship position
     ship.alpha = 1;                       // make ship visible again
     explode.destroy();                   // remove explosion sprite
    });
    //update Score
    this.p1Score.Score += ship.points;
    this.scoreLeft.text = this.p1Score;
  }
   }

  