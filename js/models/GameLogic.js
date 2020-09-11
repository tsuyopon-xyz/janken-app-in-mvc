export default class GameStatus {
  constructor(fps = 60) {
    this._fps = fps;
    this._currentFrame = 0;
    this._isPlaying = false;
  }

  get fps() {
    return this._fps;
  }

  get currentFrame() {
    return this._currentFrame;
  }

  get isPlaying() {
    return this._isPlaying;
  }

  tick() {
    if(!this.isPlaying) {
      return;
    }

    this._currentFrame++;
  }

  start() {
    this._isPlaying = true;
  }

  restart() {
    this._currentFrame = 0;
    this._isPlaying = true;
  }

  stop() {
    this._isPlaying = false;
  }

  /**
   *
   * @param {Hand.TYPES} selectedHandType
   * @param {Hand.TYPES} enemyHandType
   */
  judge(selectedHandType, enemyHandType) {
    // じゃんけんの勝敗アルゴリズム
    // https://qiita.com/mpyw/items/3ffaac0f1b4a7713c869
    const result = (selectedHandType - enemyHandType + 3) % 3

    return result;
  }
}