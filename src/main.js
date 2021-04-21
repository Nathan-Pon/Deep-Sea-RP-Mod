/*
Nathan Pon
4/19/2021
 CMPM 120
 RP Mod - Harpoon of the Deep
Estimated time: 13 hours

Points Breakdown
 60 (Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi)) 
 20 (Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points)
  5 (Allow the player to control the Rocket after it's fired)
  5 (Implement the speed increase that happens after 30 seconds in the original game )

*/

let config = {
 type:Phaser.CANVAS,
 width: 640,
 height: 480, 
 scene: [Menu, Play]
}

let game = new Phaser.Game(config);
//set UI sizes
let borderUIsize = game.config.height/15;
let borderPadding = borderUIsize/3;
let starSpeed = 4;

let keyF, keyR, keyLEFT, keyRIGHT;


