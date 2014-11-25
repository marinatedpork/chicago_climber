require 'csv'

def pitch_scrub(string)
	if string.nil?
		return nil 
	else
		slice_index_for_scrub = (string =~ /\s+/) - 1
		return string.slice(0..slice_index_for_scrub).to_i
	end
end

def create_climb(row)
	args = {name: row[0], category: row[1], rating: row[2], integer_rating: row[3], height: row[4], pitches: pitch_scrub(row[5]), url: row[6]}
	Climb.create!(args)
end


def parse_routes
	CSV.foreach('db/all_routes.csv') do |row|
		create_climb(row)
	end
end

parse_routes