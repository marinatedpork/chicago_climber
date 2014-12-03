class AddColumnToClimbs < ActiveRecord::Migration
  def change
  	add_column :climbs, :tags, :text
  end
end
