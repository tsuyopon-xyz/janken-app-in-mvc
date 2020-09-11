(async () => {
  const Hand = (await import('../models/Hand.js')).default;
  const HandCanvas = (await import('../views/HandCanvas.js')).default;
  const GameLogic = (await import('../models/GameLogic.js')).default;

  // じゃんけんアプリに必要な画像を事前に読み込む
  Hand.onFinishPreload = () => {
    console.log('Done!!!');
    start();
  };
  Hand.preload();

  function start() {
    const canvas = document.getElementById('screen');
    const handCanvas = new HandCanvas(canvas);
    const gameLogic = new GameLogic(10);

    window.setInterval(() => {
      if(gameLogic.isPlaying) {
        gameLogic.tick();
        const hand = Hand.createByFrame( gameLogic.currentFrame );
        handCanvas.draw(hand.handImage);
      }
    }, 1000 / gameLogic.fps);


    gameLogic.start();
  }
})();

