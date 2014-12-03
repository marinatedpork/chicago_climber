class CreateSubareas < ActiveRecord::Migration
  def change
    create_table   :subareas do |t|
    	t.string     :name
    	t.belongs_to :state
      t.timestamps
    end
  end
end
