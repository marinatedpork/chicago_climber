class AddReferenceToSubarea < ActiveRecord::Migration
  def change
  	add_reference :subareas, :area, index: true
  end
end
