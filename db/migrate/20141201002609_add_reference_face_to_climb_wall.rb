class AddReferenceFaceToClimbWall < ActiveRecord::Migration
  def change
  	add_reference :climbs, :face,    index: true
  	add_reference :walls,  :face,    index: true
  end
end
