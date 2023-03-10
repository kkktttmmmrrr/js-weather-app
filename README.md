# weather-app（JavaScript）

## アプリケーション名

ウェザーアプリ

## URL

[ウェザーアプリ](https://shimmering-narwhal-8e9a8b.netlify.app/)

## フロントエンド

- HTML5
- CSS3
- JavaScript

## 使用 API

- WeatherAPI

## 使用ライブラリ

- axios

## ホスティングサーバ

- Netlify
- Vercel

## その他

- バージョン管理：GitHub

## 機能

テキストボックスに都市名を入力して「Get Weather」ボタンを押下すると、現在の天気情報が表示されるシンプルなアプリケーションです。

- 「WeatherAPI」のデータを取得し、画面に表示。
- 天気が表示されるまでは、ローディングアニメーションが動く。
- 繰り返し入力するため、入力した都市名は消去する。
- セキュリティ対策として、WetherAPI の取得キーを隠蔽するため proxy サーバを設置、経由させる。

## レスポンシブコーディング対応

- ブラウザの User Agent を取得し、モバイルの場合 mobile.css を適用する。
- レイアウトの変更が発生する部分については、メディアクエリでレイアウト設定。
- フォントサイズや幅、マージンなどはメディアクエリを使用せず、clamp 関数を使い可変を実現。
