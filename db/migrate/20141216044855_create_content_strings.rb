class CreateContentStrings < ActiveRecord::Migration
  def change
    create_table :content_strings do |t|
    	t.text		 :content
      t.timestamps
    end
  end
end
