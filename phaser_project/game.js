const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

let player;
let cursors;
let coins;
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let scoreText;
let highScoreText;

function preload() {
  this.load.spritesheet('player', 'assets/trchar000_1.png', { frameWidth: 32, frameHeight: 48 });
  this.load.image('coin', 'assets/coin.png');
  this.load.image('background', 'assets/bg.png');
  this.load.image('bump', 'assets/introGirl.png');
}

function create() {
  this.background = this.add.image(0,0,"background");
  this.background.setOrigin(0.5,0.5);
  this.background.x = config.width / 2;
  this.background.y = config.height / 2;

  player = this.physics.add.sprite(100, 100, 'player');
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
    frameRate: 10,
    repeat: -1
  });

  cursors = this.input.keyboard.createCursorKeys();

  coins = this.physics.add.group();
  generateCoins(10);
  bumps = this.physics.add.group();
  for (let i = 0; i < 5; i++) {
    const x = Phaser.Math.Between(50, 750);
    const y = Phaser.Math.Between(50, 550);
    const bump = bumps.create(x, y, 'bump');
    bump.setCollideWorldBounds(true);
  }

  this.physics.add.overlap(player, coins, collectCoin, null, this);
  this.physics.add.collider(player, bumps, hitBump, null, this);

  scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '18px', fill: '#fff' });
  highScoreText = this.add.text(16, 36, 'High Score: ' + highScore, { fontSize: '18px', fill: '#fff' });
}

function update() {
  player.setVelocity(0);

  if (cursors.left.isDown) {
    player.setVelocityX(-160);
    player.anims.play('left', true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(160);
    player.anims.play('right', true);
  } else if (cursors.up.isDown) {
    player.setVelocityY(-160);
    player.anims.play('up', true);
  } else if (cursors.down.isDown) {
    player.setVelocityY(160);
    player.anims.play('down', true);
  } else {
    player.anims.stop();
  }
}

function generateCoins(number) {
  for (let i = 0; i < number; i++) {
    const x = Phaser.Math.Between(50, 750);
    const y = Phaser.Math.Between(50, 550);
    const coin = coins.create(x, y, 'coin');
    coin.setCollideWorldBounds(true);
  }
}

function collectCoin(player, coin) {
  coin.disableBody(true, true);

  score += 10;
  scoreText.setText('Score: ' + score);
 
  if (score > highScore) {
    highScore = score;
    highScoreText.setText('High Score: ' + highScore);
    localStorage.setItem('highScore', highScore);
  }

  const x = Phaser.Math.Between(50, 750);
  const y = Phaser.Math.Between(50, 550);
  const newCoin = coins.create(x, y, 'coin');
  newCoin.setCollideWorldBounds(true);
}

function hitBump(player, bump) {
  this.physics.pause();   
  player.setTint(0xff0000);  
  player.anims.stop();     
  alert('Game Over!');   

 
  score = 0;
  localStorage.setItem('highScore', highScore);  
  location.reload(); 
}
