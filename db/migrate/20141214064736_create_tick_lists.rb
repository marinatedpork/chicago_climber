class CreateTickLists < ActiveRecord::Migration
  def change
    create_table :tick_lists do |t|
    	t.string	 :name
    	t.integer	 :score				
      t.timestamps
    end
  end
end