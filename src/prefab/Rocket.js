class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene,x, y,texture, frame) {
        super(scene,x, y,texture, frame);
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
    }
    update() {
        if(!this.isFiring) {if (keyLeft.isDown && this.x >borderUIsize + this.width) {
            this.x -= this.moveSpeed;
        }
        else if(keyRight.isDown && this.x >borderUIsize +this.width) {
            this.x += this.moveSpeed;
        }
        }
    }

}