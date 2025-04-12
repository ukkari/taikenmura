# 自然体験村 ウェブサイト

## 概要
一般社団法人自然体験村の公式ウェブサイトです。

## 技術スタック
- Jekyll（静的サイトジェネレーター）
- TailwindCSS（CSSフレームワーク）

## 開発環境のセットアップ

### 必要条件
- Ruby 2.7.0以上
- Bundler
- Jekyll

### インストール手順
1. リポジトリをクローン
```bash
git clone https://github.com/ukkari/taikenmura.git
cd taikenmura
```

2. 依存関係をインストール
```bash
bundle install
```

3. ローカルサーバーを起動
```bash
bundle exec jekyll serve
```

4. ブラウザで http://localhost:4000 にアクセス

## ビルド方法
```bash
bundle exec jekyll build
```
ビルドされたサイトは `_site` ディレクトリに出力されます。

## デプロイ
このサイトはNetlifyにホストされています。mainブランチにプッシュすると自動的にデプロイされます。

## ファイル構造
- `_includes/`: ヘッダーやフッターなどの再利用可能なコンポーネント
- `_layouts/`: ページレイアウトテンプレート
- `sections/`: 各セクションのコンテンツページ
- `images/`: 画像ファイル
- `news.js`: ニュースフィード取得用JavaScript

## コンポーネントの再利用
ヘッダーとフッターは `_includes` ディレクトリに配置され、すべてのページで再利用されています。
- `_includes/header.html`: サイト共通のヘッダー
- `_includes/footer.html`: サイト共通のフッター（ページによって表示が異なります）

## 新しいページの追加方法
1. 新しいHTMLファイルを作成し、フロントマターを追加
```html
---
layout: default
title: ページタイトル
---

<!-- ページコンテンツ -->
```

2. 必要に応じてナビゲーションメニューを更新（`_includes/header.html`）
