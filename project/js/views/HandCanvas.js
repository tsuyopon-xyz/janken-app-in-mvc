export default class HandCanvas {

  /**
   *
   * @param {HTMLCanvasElement} canvas
   */
  constructor(canvas) {
    this._canvas = canvas;
    canvas
    this._context = canvas.getContext('2d');
  }

  draw(handImage) {
    this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._context.drawImage(
      handImage,
      0,
      0,
    );
  }
}