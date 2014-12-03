class Section < ActiveRecord::Base
	belongs_to :state
	belongs_to :area
	belongs_to :subarea
	belongs_to :crag
	has_many   :faces
	has_many   :walls
	has_many   :climbs
end
