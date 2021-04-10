class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene,x, y,texture, frame) {
        super(scene,x, y,texture, frame);
        scene.add.existing(this); //Place Rocket in scene
        this.isFiring = false;
        this.moveSpeed = 2;
    }
    update() {
        if(!this.isFiring) {if (keyLEFT.isDown && this.x >borderUIsize + this.width) {
            this.x -= this.moveSpeed;
        }
        else if(keyRIGHT.isDown && this.x >borderUIsize +this.width) {
            this.x += this.moveSpeed;
          }
        }
        //fire control
        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
        }
        if(this.isFiring && this.y >= borderUIsize*3 + borderPadding) {
            this.y -= this.moveSpeed
        }
        //reset
        if(this.y <= borderUIsize * 3 + borderPadding) {
            this.reset()
        }
    }
   reset () {
    this.isFiring = false
    this.y= game.config.height - borderUIsize - borderPadding;
       }
    
   
}