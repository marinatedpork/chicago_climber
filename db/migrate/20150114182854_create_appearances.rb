class CreateAppearances < ActiveRecord::Migration
  def change
    create_table :appearances do |t|
    	t.belongs_to :user
    	t.belongs_to :tick_list
    	t.belongs_to :climb
      t.timestamps
    end
  end
end
