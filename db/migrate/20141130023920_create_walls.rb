class CreateWalls < ActiveRecord::Migration
  def change
    create_table   :walls do |t|
    	t.string     :name
    	t.belongs_to :state
    	t.belongs_to :area
    	t.belongs_to :subarea
      t.timestamps
    end
  end
end
