# encoding: utf-8

require 'open-uri'
require 'nokogiri'
require 'kconv'

class ParseHTML

  # URLのタイトルを返す
  def get_title(url)
    html = open(url, 'r:binary').read
    doc = Nokogiri::HTML.parse(html.toutf8, nil, 'utf-8')
    doc.title
  end
end
