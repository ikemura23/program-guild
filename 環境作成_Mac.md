# 環境作成 fow Mac

## Homebrewのインストール
[Homebrew](https://brew.sh/index_ja.html)を使うと開発に必要なモノを手軽にまとめてインストールできる。 
Macを使って開発するなら必須！  

### 手順
1. ターミナルを起動する
2. 手順2 以下のコマンドをコピペして実行する
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
これでMacにHomebrewがインストールされた。

3. ターミナルで以下を実行する。

```
brew install cask git
```

caskインストール後、以下のソフトをまとめてインストールする。

- Visual Studio Code : HPを作成していくエディタ
- atom ： 万能テキストエディタ、メモ帳代わりに使う

4. ターミナルで以下を実行する。

```
brew cask install atom google-japanese-ime visual-studio-code
```

---

## anyenvをインストールする
[anyenv](https://github.com/riywo/anyenv)を入れると色々な開発環境を手軽に作れるためインストールする。

```
$ git clone https://github.com/riywo/anyenv ~/.anyenv
$ echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.your_profile
$ echo 'eval "$(anyenv init -)"' >> ~/.your_profile
$ exec $SHELL -l
```

ndenvをインストールする

```
anyenv install ndenv
exec $SHELL -l
```

[ndenv](https://github.com/riywo/ndenv)からnodejsをインストールする

```

ndenv install -l
ndenv install v8.1.0
ndenv global v8.1.0
ndenv versions
```

nodejsのバージョン確認
```
node -v
v8.1.0    <-こうなればOK
```