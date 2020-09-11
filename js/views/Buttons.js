export default class Buttons {
  constructor() {
    this._rockButton = document.getElementById('rock');
    this._scissorsButton = document.getElementById('scissors');
    this._paperButton = document.getElementById('paper');
    this._restartButton = document.getElementById('restart');

    const onClick = (event) => {
      const handType = parseInt(event.target.value, 10);
      this.onClickHandButton(handType);
    };

    this._rockButton.addEventListener('click', onClick);
    this._scissorsButton.addEventListener('click', onClick);
    this._paperButton.addEventListener('click', onClick);
    this._restartButton.addEventListener('click', () => {
      this.onClickRestartButton();
    });
  }

  onClickHandButton(handType) {
    throw new Error('インスタンス生成後上書きすること');
  }

  onClickRestartButton() {
    throw new Error('インスタンス生成後上書きすること');
  }
}