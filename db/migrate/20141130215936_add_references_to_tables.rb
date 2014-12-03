class AddReferencesToTables < ActiveRecord::Migration
  def change
  	add_reference :climbs, :crag,    index: true
  	add_reference :climbs, :section, index: true
  	add_reference :walls,  :crag,    index: true
  	add_reference :walls,  :section, index: true
  end
end
