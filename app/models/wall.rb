class Wall < ActiveRecord::Base
	belongs_to :state
	belongs_to :area
	belongs_to :subarea
	belongs_to :crag
	belongs_to :section
	belongs_to :face
end
