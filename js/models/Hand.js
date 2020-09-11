export default class Hand {
  /**
   *
   * @param {Hand.TYPES} handType
   */
  constructor(handType) {
    this.handType = handType;
    this.handImage = Hand._handImages[handType];
  }

  static createByFrame(frame) {
    const handType = Hand.createHandTypeByFrame(frame);

    return new Hand(handType);
  }

  static createHandTypeByFrame(frame) {
    const handType = frame % Hand._handImages.length;

    return handType;
  }

  static TYPES = {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: 2
  }

  static _handImages = [
    new Image(),
    new Image(),
    new Image()
  ]

  static _hasLoaded = false;

  static onFinishPreload = () => {};

  static get hasLoaded() {
    return Hand._hasLoaded;
  }

  static preload() {
    if(Hand._hasLoaded) {
      return;
    }

    let loadedCount = 0;
    const handleLoadedImage = () => {
      loadedCount++;
      if(loadedCount === Hand._handImages.length) {
        Hand._hasLoaded = true;
        Hand.onFinishPreload();
      }
    }

    Hand._handImages.forEach((image, index) => {
      image.onload = handleLoadedImage;
      image.src = `./images/hand_${index}.png`
    });
  }
}