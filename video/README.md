# ゆる美容ノート 動画テンプレート

既存サイトとは独立したRemotionプロジェクトです。リポジトリのルートではなく `video/` で実行してください。

## 起動

Node.js 22以上を推奨。

```sh
cd video
npm ci
npm run dev
```

Studioで `BeautyProduct15` を選択します。1080×1920 / 30fps / 450フレーム（15秒）。

## データ差し替えと生成

`data/sample-product.json` をコピーして商品名、画像、導入文、3つのポイント、CTAを変更します。Studioの初期値はsample-product.jsonです。別JSONは下記の生成コマンドで指定します。

```sh
npm run typecheck
npm run render -- data/sample-product.json out/sample.mp4
```

画像パスは `public/` 基準（例：images/product.png）。HTTPS画像URLも使用できますが、安定した生成にはローカル画像を推奨します。ポイントは必ず3件。文字数上限は商品名48、導入文60、各ポイント52、CTA60です。長い日本語テキストはプレビューで確認してください。

初期画像は架空商品のSVGです。実商品の画像・紹介文は利用条件や商品情報を確認して差し替えてください。PRは常時表示。動画にURLを埋めてもクリックリンクにはなりません。CTAに対応するリンクは投稿文やプロフィールへ設定してください。

日本語表示のため実行環境に日本語フォント（Noto Sans CJK JP等）が必要です。初回のレンダリングではRemotionがブラウザをダウンロードする場合があります。BGM・ナレーションは含みません。

`node_modules/` と `out/` はGit管理対象外。GitHub Actions、定期実行、SNS投稿、既存HTMLの書き換えは含みません。
