# インストール

## 必要ライブラリをインストール

### RHEL系

1. `sudo yum groupinstall -y "Development Tools"`
1. `sudo yum install -y kernel-devel kernel-headers sqlite-devel libxml2-devel git openssl-devel readline-devel zlib-devel`

### Debian系

1. `sudo apt-get install -y build-essential libsqlite3-dev libxml2-dev git libssl-dev libreadline-dev zlib1g-dev`

## Ruby/必要Gemをインストール

1. `git clone https://github.com/rbenv/rbenv.git ~/.rbenv`
1. `cd ~/.rbenv && src/configure && make -C src && cd ~`
1. `echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc`
1. `~/.rbenv/bin/rbenv init`
1. `echo 'eval "$(rbenv init -)"' >> ~/.bashrc`
1. `git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build`
1. `source ~/.bashrc`
1. `rbenv install 2.3.1`
1. `rbenv global 2.3.1`
1. `gem update --system`
1. `gem install bundler`

## 設定

1. Slackの Custom Integrations (`https://YOUR_TEAM.slack.com/apps/manage/custom-integrations`) から `Outgoing WebHooks` を有効にしてよしなに設定する
    * [この辺り](http://qiita.com/chike0905/items/58222a99be460f325ab8)をみるといいかも？
1. `app.rb` の `CHANNEL_TOKEN` にSlackのOutgoing WebHooksの `Token` を設定する

## Gemfileインストール〜起動

1. `bundle install --path vendor/bundle`
1. `bundle exec rackup -o 0.0.0.0 -p 4567`

上記で実行すると、フォアグラウンドで走ってしまうので、バックグラウンドタスクにしたいのであればUnicornとか使えばいいと思うよ。
