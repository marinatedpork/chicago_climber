class CreateClimbs < ActiveRecord::Migration
  def change
    create_table :climbs do |t|
    	t.string   :name
    	t.string   :type
    	t.string   :rating
    	t.integer  :integer_rating
    	t.integer  :height
    	t.integer  :pitches
    	t.string   :url
    	t.timestamps
    end
  end
end
