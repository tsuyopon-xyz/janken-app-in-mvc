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

  stop() {
    this._isPlaying = false;
  }
}