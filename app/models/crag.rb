class Crag < ActiveRecord::Base
	belongs_to :state
	belongs_to :area
	belongs_to :subarea
	has_many   :sections
	has_many   :faces
	has_many   :walls
	has_many   :climbs
end
