class RenameColumnTypeToCategory < ActiveRecord::Migration
  def change
  	rename_column :climbs, :type, :category
  end
end
