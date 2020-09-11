# じゃんけんゲームを作りながら覚えるHTML&JavaScript

## 前提

Webブラウザの種類やバージョンによっては、対応されていない機能を使うため、うまく動かない場合は、僕が動作確認したときと同じ環境で実装を行ってください。


実装するコードの中でわからない部分がある場合は、都度ドキュメントを観ていただけたらと思います。


このページ(README.md)の一番下にも、参考することになりそうなドキュメントのリンクを用意しております。

---

## 動作を確認できた環境

- Webブラウザの種類: Google Chrome
- ブラウザのバージョン: 85.0.4183.83

---

## 求める知識レベル

以下の内容を知っていて、ドキュメントを見ながらであれば実装できるレベル

- コールバック関数
- クラス
- 非同期処理
- Promise
- async/await
- モジュール


※注意点

以下の機能を使うため、初心者の方にとってはドキュメントを観ても難しいかもしれない点だけご理解ください。

- async/await
- import/export
- Public class fields

---

## 実装ステップ

### ステップ1. 完成形の紹介 & ディレクトリ構造の紹介

- ディレクトリ構造
    - images・・・画像を格納するディレクトリ
    - js・・・jsファイルを格納するディレクトリ
        - controllers・・・modelsとviewsの橋渡しを行うjsファイルを格納する
        - models・・・ゲームで使うデータ処理・管理を行うjsファイルを格納する
        - views・・・表示周りの処理を行うjsファイルを格納する
    - index.html・・・じゃんけんゲームの表示要素を記述するHTMLファイル


### ステップ2. 必要素材のダウンロード & HTMLで大枠を作る



- [利用する画像](https://www.irasutoya.com/2013/07/blog-post_5608.html)


### ステップ3. 画像読み込み機能の実装と、 import/exportを使ったファイルのモジュール化の実装


### ステップ4. canvas上に手の画像を表示して、画像を切り替えるためのロジックを実装する


### ステップ5. 選択した「じゃんけんの手」に応じた値をメソッド経由で取得する


### ステップ6. 選択した「じゃんけんの手」に応じた値を関数経由で取得して、canvas上の画像の切り替えを止める


### ステップ7. じゃんけんの「勝ち・負け・引き分け判定」を実装実装


### ステップ8. 「再開」ボタンをクリックしたら、canvas上の停止している画像の切り替えを再開する








## 動作確認方法

- ローカルサーバーを起動して確認する。
- Visual Studio Codeを使っている場合は、拡張機能の「Live Server」をインストールして、Live Serverを起動して動作確認するのが簡単
    - https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer




## 参考

- ドキュメント
    - [import](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)
    - [export](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export)
    - [async function](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function)
    - [await](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/await)
    - [クラス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes)
    - [Public class fields](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
    - [ゲッター](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/get)
- [じゃんけんの勝敗アルゴリズムの紹介記事](https://qiita.com/mpyw/items/3ffaac0f1b4a7713c869)