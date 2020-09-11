export default class Judge {
  static RESULT_TYPES = {
    DRAW: 0,
    LOSE: 1,
    WIN:  2
  }

  /**
   *
   * @param {Hand.TYPES} selectedHandType
   * @param {Hand.TYPES} enemyHandType
   */
  static judge(selectedHandType, enemyHandType) {
    // じゃんけんの勝敗アルゴリズム
    // https://qiita.com/mpyw/items/3ffaac0f1b4a7713c869
    const result = (selectedHandType - enemyHandType + 3) % 3

    return result;
  }
}