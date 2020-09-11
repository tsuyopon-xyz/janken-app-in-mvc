(async () => {
  const Hand = (await import('../models/Hand.js')).default;
  const GameLogic = (await import('../models/GameLogic.js')).default;
  const JankenLogic = (await import('../models/JankenLogic.js')).default;
  const HandCanvas = (await import('../views/HandCanvas.js')).default;
  const Buttons = (await import('../views/Buttons.js')).default;

  // じゃんけんアプリに必要な画像を事前に読み込む
  Hand.onFinishPreload = () => {
    start();
  };
  Hand.preload();


  // じゃんけんに必要な画像の読み込みが完了したら実行される
  function start() {
    const canvas = document.getElementById('screen');
    const handCanvas = new HandCanvas(canvas);
    const buttons = new Buttons();
    const gameLogic = new GameLogic(10);

    buttons.onClickHandButton = (handType) => {
      gameLogic.stop();
      const currentFrame = gameLogic.currentFrame;
      const enemyHandType = Hand.createHandTypeByFrame(currentFrame);
      const judgeResult = JankenLogic.judge(handType, enemyHandType);

      if(judgeResult === JankenLogic.RESULT_TYPES.DRAW) {
        window.alert('引き分け');
      } else if(judgeResult === JankenLogic.RESULT_TYPES.LOSE) {
        window.alert('負け');
      } else {
        window.alert('勝ち');
      }
    };

    buttons.onClickRestartButton = () => {
      gameLogic.restart();
    };

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
