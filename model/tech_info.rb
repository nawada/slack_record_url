# coding: utf-8

require 'yaml'
require 'active_record'

ActiveRecord::Base.configurations = YAML.load_file('./conf/database.yml')
ActiveRecord::Base.establish_connection(:development)

class TechInfo < ActiveRecord::Base
end
