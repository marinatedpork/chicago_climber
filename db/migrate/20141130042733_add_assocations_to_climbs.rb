class AddAssocationsToClimbs < ActiveRecord::Migration
  def change
  	add_reference :climbs, :state,   index: true
  	add_reference :climbs, :area,    index: true
  	add_reference :climbs, :subarea, index: true
  	add_reference :climbs, :wall,    index: true
  end
end
