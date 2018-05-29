# nicoRtmpWatch
(Grease|Tamper)monkey script for watching niconico live by RTMP

# 概要

ニコニコ生放送の新配信のページで、RTMP(Flash使用の旧配信の方式)での閲覧を行うためのスクリプト

# 準備

## アドオンのインストール

以下のブラウザの拡張機能が必要です。

### Tampermonkey (Chrome)
https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja

### Greasemonkey (Firefox)
https://addons.mozilla.org/ja/firefox/addon/greasemonkey/


## スクリプトのインストール

上記ブラウザの拡張機能がインストールされた状態で、以下をクリックして下さい。
インストール確認画面が出るので、インストールをクリックして下さい。

https://github.com/himananiito/nicoRtmpWatch/raw/master/nicortmp.user.js


# RTMP(旧配信の方式)での閲覧方法

## 手動で切り替える

ニコニコ生放送の新配信のページ(live2.nicovideo.jp/watch/lvXXXXXXXX)に行くと、
右上の「メニュー」内に「RTMPテスト」が追加されているのでクリックしてください。

うまくいくと旧配信のプレーヤーで見れるかもしれません。

## 自動切換え

多重閲覧または新配信対応の録画ツール使用時に出る以下の文字列を検出して自動的に切り替わります。

『サーバーとの通信に失敗したため、映像データの受信に失敗しました。※このダイアログは同一番組を複数環境で視聴しようとした場合にも表示されます。』
