require 'csv'
require_relative '../lib/tasks/location_parser.rb'
require_relative '../lib/tasks/tagger.rb'

# FOR PARSING BLANK DB ***NO LOCATION DATA***

	# def pitch_scrub(string)
	# 	if string.nil?
	# 		return nil 
	# 	else
	# 		slice_index_for_scrub = (string =~ /\s+/) - 1
	# 		return string.slice(0..slice_index_for_scrub).to_i
	# 	end
	# end

	# def create_climb(row)
	# 	args = {name: row[0], category: row[1], rating: row[2], integer_rating: row[3], height: row[4], pitches: pitch_scrub(row[5]), url: row[6]}
	# 	p Climb.create!(args)
	# end


	# def parse_routes
	# 	CSV.foreach('db/all_routes.csv') do |row|
	# 		create_climb(row)
	# 	end
	# end

	# parse_routes


#  FOR PARSING ROUTE LOCATION INFORMATION

	# LocationParser.parse_locations

# FOR UPDATING TAG FIELDS

	# Tagger.tag_climbs

# FOR UPDATING TAG OF FIRST 20

	# Tagger.tag_20

# FOR SEEDING CONTENT STRING

	ContentString.create!(content: ContentString.compile_to_array)

# FOR TEMP JSON

	# attrs = Climb.all.sample(5000).map(&:to_info)
	# File.open("public/temp_climbs.json","w") do |f|
	#   f.write(attrs)
	# end
