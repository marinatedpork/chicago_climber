class AddIndexTagsToClimbs < ActiveRecord::Migration
  def change
  	add_index :climbs, :tags
  end
end
