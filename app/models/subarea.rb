class Subarea < ActiveRecord::Base
	belongs_to :state
	belongs_to :area
	has_many   :crags
	has_many   :sections
	has_many   :faces
	has_many   :walls
	has_many   :climbs
end
