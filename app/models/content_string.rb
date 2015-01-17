class ContentString < ActiveRecord::Base
	serialize :content, JSON


	def self.compile_to_array
		return Climb.all.map(&:to_info).to_json
	end	

	def self.compile_to_hash
		climbs = Climb.all.map(&:to_info)
		content_string = {}
		climbs.each { |climb| content_string[climb["id"]] = climb }
		return content_stringto.to_json
	end

end


