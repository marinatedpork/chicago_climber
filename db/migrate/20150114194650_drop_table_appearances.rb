class DropTableAppearances < ActiveRecord::Migration
  def change
  	drop_table :appearances
  end
end
