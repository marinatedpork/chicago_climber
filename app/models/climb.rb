class Climb < ActiveRecord::Base

	def self.search(string)
		results = []
		query_params = string.split(/\s+/).map(&:downcase)
		number_params = query_params.select { |param| (param =~ /\d/) == 0}
		results << word_search(query_params)				
		results << number_search(number_params)				
		return results.flatten.uniq
	end

	def to_s
		"#{self.name} #{self.rating} #{self.height} #{self.pitches}"
	end

	private
	def self.word_search(params)
		results = []
		word_fields = ["name", "category"]
		params.each do |param|
			word_fields.each do |field|
				results << Climb.all.select{ |route| route.send("#{field}").downcase =~ /#{param}/}
			end
		end
		return results.flatten.uniq
	end

	def self.number_search(params)
		results = []
		number_fields = ["rating", "integer_rating", "height", "pitches"]
		params.each do |param|
			number_fields.each do |field|
				results << self.all.where("#{field} = ?", param)
			end
		end
		return results.flatten.uniq
	end

end