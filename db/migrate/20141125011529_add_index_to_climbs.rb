class AddIndexToClimbs < ActiveRecord::Migration
  def change
  	add_index :climbs, :name
  	add_index :climbs, :type
  	add_index :climbs, :rating
		add_index :climbs, :integer_rating
		add_index :climbs, :height
		add_index :climbs, :pitches
  end
end
