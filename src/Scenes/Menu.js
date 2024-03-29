class Menu extends Phaser.Scene {
 constructor() {
     super ("menuScene");
 }   
 preload () {
 //load audio
    this.load.audio ('sfx_select', './assets/blip_select12.wav')
    this.load.audio ('sfx_explosion', './assets/explosion38.wav')
    this.load.audio ('sfx_rocket', './assets/rocket_shot.wav')
 
  //New Title screen
   this.load.image ('Title Screen', './assets/Art/Title Screen.png')

 }
 create () { 


   //Menu Text Configuration
    let menuConfig = {
    fontFamily: 'Trebuchet MS',
    fontSize: '28px',
    backgroundColor: '#F3B141',
    color: '#d9e8fa',
    align: 'right',
    padding: {
      top: 5,
      bottom: 5,
    },
  fixedWidth: 0
 }
/* Old Menu Screen
  this.add.text(game.config.width/2, game.config.height/2 - borderUIsize - borderPadding, 'HARPOON OF THE DEEP', menuConfig).setOrigin(0.5);
  this.add.text(game.config.width/2, game.config.height/2, "Use arrows to move and (F) to Fire", menuConfig).setOrigin(0.5);
  menuConfig.backgroundColor = '#08455e';
  menuConfig.color = '#0c2f47';
  this.add.text(game.config.width/2, game.config.height/2 + borderUIsize +
  borderPadding, 'Press <- for Novice and -> for Expert', menuConfig).setOrigin(0.5);*/

  //New Menu Screen
  this.add.image(game.config.width/2, game.config.height/2,'Title Screen').setOrigin(0.5);

  keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
  keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
 }

 update() {
   //Novice
  if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
    game.settings = {
      spaceshipSpeed: 3,
      gameTimer: 60000    
    }
    this.sound.play('sfx_select');
    this.scene.start('playScene');    
  }
  //Expert
  if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
    game.settings = {
    spaceshipSpeed: 4,
    gameTimer: 45000  
    }
    this.sound.play('sfx_select');
    this.scene.start('playScene');        
  }
 }
}