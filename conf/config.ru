require "./app.rb"
require 'activerecord-refresh_connection'
use ActiveRecord::ConnectionAdapters::RefreshConnectionManagement
run App
