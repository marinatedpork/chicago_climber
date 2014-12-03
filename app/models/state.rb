class State < ActiveRecord::Base
	has_many :areas
	has_many :subareas
	has_many :crags
	has_many :sections
	has_many :faces
	has_many :walls
	has_many :climbs
end
