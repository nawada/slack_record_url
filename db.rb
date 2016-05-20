# encoding: utf-8

require 'date'
require 'sqlite3'

class DBCommand
  # DBを開く
  def open_db
    SQLite3::Database.new('techInfo.db')
  end

  # DBを閉じる
  def close_db(db)
    db.close
  end

  # テーブル作成
  def create_table
    sql = <<-SQL
    CREATE TABLE TECH_INFO (
      no INTEGER PRIMARY KEY AUTOINCREMENT,
      url STRING NOT NULL,
      title STRING NOT NULL,
      user_name STRING NOT NULL,
      reg_date STRING NOT NULL
    );
    SQL

    db = open_db
    db.execute(sql)
    close_db(db)
  end

  # 全件取得
  def find_rows
    sql = 'SELECT * FROM TECH_INFO ti ORDER BY ti.no'

    values = []
    db = open_db
    db.execute(sql) do |row|
      values << row
    end
    close_db(db)

    values
  end

  # データ登録
  def regist_data(url, title, user_name)
    # SQLiteはDate型が無いため、文字列を登録する
    tmp = Time.now.localtime('+09:00')
    tmp = tmp.to_s
    reg_date = tmp.slice(0, tmp.index(' +'))

    sql = <<-SQL
    INSERT INTO TECH_INFO ( url, title, user_name, reg_date ) VALUES ( ?, ?, ?, ? )
    SQL

    db = open_db
    db.execute(sql, url, title, user_name, reg_date)
    close_db(db)
  end
end
