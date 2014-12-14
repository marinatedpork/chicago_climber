class AddReferenceUserToTickLists < ActiveRecord::Migration
  def change
  	add_reference :tick_lists, :user, index: true
  end
end
