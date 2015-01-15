class Appearance < ActiveRecord::Base
	belongs_to :climb
	belongs_to :tick_list
end
