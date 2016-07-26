# coding: utf-8

require 'sinatra'
require 'sinatra/base'
require 'sinatra/reloader' if development?
require 'sinatra/json'

require './model/tech_info'
require './parseHTML'

class App < Sinatra::Base
  CHANNEL_TOKEN = ''.freeze

  configure do
    # Loggingを有効にする
    enable :logging
    file = File.new('./log/development.log', 'a+')
    file.sync = true
    use Rack::CommonLogger, file
  end

  get '/' do
    @title = '技術情報共有一覧'
    erb :index
  end

  get '/api/v1/infos' do
    TechInfo.all.to_json
  end

  post '/new' do
    # token = params[:token].strip
    # return if token != CHANNEL_TOKEN

    urls = params[:text].split("\n").map { |tmp| tmp.strip }.select { |text|
      text.gsub!(/<(https?:\/\/\S+)>/, '\1')
      text.start_with?('http') ? text : nil
    }
    return if urls.size == 0

    user_name = %w(n.wada nagao k.otsuka mouri motooka yusuke.s).sample
    # user_name = params[:user_name]
    urls.each { |url|
      parser = ParseHTML.new
      title = parser.get_title(url)

      tmp = Time.now.localtime('+09:00')
      tmp = tmp.to_s
      reg_date = tmp.slice(0, tmp.index(' +'))

      TechInfo.create({ url: url,
                        title: title,
                        user_name: user_name,
                        reg_date: reg_date,
                      })
    }
  end
end

App.run!