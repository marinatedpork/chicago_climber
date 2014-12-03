class Tagger

	def self.tag_climbs
		Climb.all.each do |climb|
			climb.tags = set_tags(climb)
			climb.save!
		end
	end

	def self.tag_20
		Climb.first(20).each do |climb|
			climb.tags = set_tags(climb)
			climb.save!
		end
	end

	def self.set_tags(climb)
		attr_tags(climb) + assoc_tags(climb)
	end

	def self.attr_tags(climb)
		tags = []
		fields_one = ['name', 'rating', 'category', 'height', 'pitches']
		fields_one.each do |field|
			tag = climb.send("#{field}")
			unless tag.nil?
				tags << tag.to_s.downcase
			end
		end
		return tags
	end

	def self.assoc_tags(climb)
		tags = []
		fields_two = ['state', 'area', 'subarea', 'crag', 'section', 'wall']
		fields_two.each do |field|
			tag = climb.send("#{field}")
			unless tag.nil?
				tags << tag.name.downcase
			end
		end
		return tags
	end
	
end