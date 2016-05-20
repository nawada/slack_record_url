# encoding: utf-8

require 'sinatra'
require 'sinatra/base'
require 'sinatra/reloader' if development?
require './db'
require './parseHTML'

class App < Sinatra::Base

  CHANNEL_TOKEN = ''.freeze
  DATABASE = DBCommand.new

  configure do
    # productionに設定する
    set :environment, :production
    set :port, 80

    # Loggingを有効にする
    enable :logging
    file = File.new('./log/production.log', 'a+')
    file.sync = true
    use Rack::CommonLogger, file

    begin
      DATABASE.create_table
    rescue => e
      puts e
    end
  end

  get '/' do
    values = DATABASE.find_rows

    html = '<table border="1px"><tbody>'
    values.each { |v|
      html += '<tr>'
      html += "<td>#{v[4]}</td>"
      html += "<td>#{v[3]}</td>"
      html += "<td><a href='#{v[1]}' target='_blank'>#{v[2].gsub(/</, '&lt;').gsub(/>/, '&gt;')}</a></td>"
      html += '</tr>'
    }
    html += '</tbody></table>'
    html
  end

  post '/' do
    token = params[:token].strip
    return if token != CHANNEL_TOKEN

    urls = params[:text].split("\n").map {|tmp| tmp.strip}.select {|text|
      text.gsub!(/<(https?:\/\/\S+)>/, '\1')
      text.start_with?('http') ? text : nil
    }
    return if urls.size == 0

    user_name = params[:user_name]
    urls.each {|url|
      parser = ParseHTML.new
      title = parser.get_title(url)

      DATABASE.regist_data(url, title, user_name)
    }
  end

end
