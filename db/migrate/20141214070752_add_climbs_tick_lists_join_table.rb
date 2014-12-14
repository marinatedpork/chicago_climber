class AddClimbsTickListsJoinTable < ActiveRecord::Migration
  def change
  	create_table :climbs_tick_lists, :id => false do |t|
      t.belongs_to :climb
      t.belongs_to :tick_list
    end
  end
end
