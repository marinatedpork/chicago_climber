class CreateFaces < ActiveRecord::Migration
  def change
    create_table :faces do |t|
    	t.string :name
    	t.belongs_to :state
    	t.belongs_to :area
    	t.belongs_to :subarea
    	t.belongs_to :crag
    	t.belongs_to :section
      t.timestamps
    end
  end
end
