class Climb < ActiveRecord::Base
	belongs_to :state
	belongs_to :area
	belongs_to :subarea
	belongs_to :crag
	belongs_to :section
	belongs_to :face
  belongs_to :wall
  serialize  :tags, Array

  searchable do
  	text :name

  	integer :height, :pitches, :integer_rating
  	text :state do
      state.name unless state.nil?
    end
  	text :area do
      area.name  unless area.nil?
    end
  	text :subarea do
      subarea.name  unless subarea.nil?
    end
  	text :crag do
      crag.name  unless crag.nil?
    end
  	text :section do
      section.name  unless section.nil?
    end
  	text :wall do
      section.name  unless wall.nil?
    end
  end

  def to_html
  	html_string = "<li>"
  	html_string << "<p class='inline-block'>#{name}</p>"
  	html_string << "<p class='inline-block'>#{category}</p>"
  	html_string << "<p class='inline-block'>#{rating}</p>"
  	html_string << "<p class='inline-block'>#{height}</p>"
  	html_string << "<p class='inline-block'>#{pitches}</p>"
  	html_string << "<a href='#{url}', target='_blank'><i class='fa fa-external-link'></i></a>"
  	return html_string << "</li>"
  end

  def self.sub_query(string)
  	query = self.search do
  		fulltext string
  	end
  	return query.results.map(&:id)
  end
end