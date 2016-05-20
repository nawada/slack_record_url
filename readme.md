# インストール

## 必要ライブラリをインストール

### RHEL系

1. `sudo yum groupinstall -y "Development Tools"`
1. `sudo yum install -y kernel-devel kernel-headers sqlite-devel libxml2-devel git`

### Debian系

1. `sudo apt-get install -y build-essentials libsqlite3-dev libxml2-dev git`

## Ruby/必要Gemをインストール

1. `git clone https://github.com/rbenv/rbenv.git ~/.rbenv`
1. `cd ~/.rbenv && src/configure && make -C src && cd ~`
1. `echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc`
1. `~/.rbenv/bin/rbenv init`
1. `git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build`
1. `rbenv install 2.3.1`
1. `gem update --system`
1. `gem install bundler`

## Gemfileインストール〜起動

1. `bundle install --path vendor/bundle`
1. `bundle exec rackup -o 0.0.0.0 -p 4567`
