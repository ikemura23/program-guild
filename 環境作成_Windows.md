# 環境作成 fow Windows

ソフトを1つずつインストールするのが面倒なので、```chocolatey```を使う。
https://chocolatey.org

- コマンドプロンプトを起動
- 以下をコピペ

```
@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```
インストール確認
```
choco
# バージョンが表示される
```

chocoからソフトインストールｓ
```
choco install visualstudiocode nodejs git -y
```

おまけ
```
パッケージ一覧を確認する
chocolatey list

パッケージ更新
choco upgrade all -y
```

