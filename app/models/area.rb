class Area < ActiveRecord::Base
	belongs_to :state
	has_many   :subareas
	has_many   :crags
	has_many   :sections
	has_many   :faces
	has_many   :walls
	has_many   :climbs
end
