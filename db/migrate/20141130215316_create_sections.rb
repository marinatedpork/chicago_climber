class CreateSections < ActiveRecord::Migration
  def change
    create_table   :sections do |t|
    	t.string     :name
    	t.belongs_to :state
    	t.belongs_to :area
    	t.belongs_to :subarea
    	t.belongs_to :crag
      t.timestamps
    end
  end
end
