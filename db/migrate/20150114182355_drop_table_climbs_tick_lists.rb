class DropTableClimbsTickLists < ActiveRecord::Migration
  def change
  	drop_table :climbs_tick_lists
  end
end
