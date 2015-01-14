class Climb < ActiveRecord::Base
  has_and_belongs_to_many :tick_lists
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
    text :face do
      face.name  unless face.nil?
    end
  	text :wall do
      wall.name  unless wall.nil?
    end
  end
  
  def to_info
    unneeded_shit = ["created_at", "updated_at", "tags"]
    info = attributes
    info["state_id"] = state.name unless state.nil?
    info["area_id"] = area.name unless area.nil?
    info["subarea_id"] = subarea.name unless subarea.nil?
    info["crag_id"] = crag.name unless crag.nil?
    info["section_id"] = section.name unless section.nil?
    info["face_id"] = face.name unless face.nil?
    info["wall_id"] = wall.name unless wall.nil?
    info.each do |k,v| 
      info.delete(k) if unneeded_shit.include?(k) || v.nil?
    end
    return info
  end

  def to_html
    html_string = "<li data-id='#{id}' class='routeLine'>"
    html_string << "<p class='inline-block route-name center-text'>#{name}</p>"
    html_string << "<p class='inline-block'>#{category}</p>"
    html_string << "<p class='inline-block'>#{rating}</p>"
    html_string << "<p class='inline-block'>#{height}</p>"
    html_string << "<p class='inline-block'>#{pitches}</p>"
    html_string << "<p class='inline-block'><a href='#{url}', target='_blank'><i class='fa fa-external-link'></i></a></p>"
    return html_string << "</li>"
  end

  def to_tick_list
    html_string = "<li data-id='#{id}' class='tickListItem'>"
    html_string << "<p class='inline-block route-name center-text'>#{name}</p>"
    html_string << "<div class='tick-list-sub-line'><span class='category'>#{category}</span>"
    html_string << "<span class='rating'>#{rating}</span>"
    html_string << "<span class='state'>#{state.name}</span>"
    html_string << "<i class='fa fa-trash float-right delete-climb pointer'></i></div>"
    return html_string << "</li>"
  end

  def self.query(string)
  	query = self.search do
  		fulltext string
  	end
  	return query.results.map(&:id)
  end

  def self.sort_climbs_desc(results, constraint)
    p results[0].height > results[1].height
    locations = ["state", "wall"]
    case constraint
      when locations.include?(constraint) then results.sort {|y, x| x.send(constraint).name <=> y.send(constraint).name }.map(&:id)
      when "height" then results.sort {|y, x| (x.height).to_i <=> (y.height).to_i }.map(&:id)
      when "pitches" then results.sort {|y, x| (x.pitches).to_i <=> (y.pitches).to_i }.map(&:id)
      when "rating" then results.sort {|y, x| (x.integer_rating).to_i <=> (y.integer_rating).to_i }.map(&:id)
      else return results.sort {|y, x| x.send(constraint) <=> y.send(constraint)}.map(&:id)
    end
  end

  def self.sort_climbs_asc(results, constraint)
    p results[0].height > results[1].height
    locations = ["state", "wall"]
    case constraint
      when locations.include?(constraint) then results.sort {|x,y| x.send(constraint).name <=> y.send(constraint).name }.map(&:id)
      when "height" then results.sort {|x,y| (x.height).to_i <=> (y.height).to_i }.map(&:id)
      when "pitches" then results.sort {|x,y| (x.pitches).to_i <=> (y.pitches).to_i }.map(&:id)
      when "rating" then results.sort {|x,y| (x.integer_rating).to_i <=> (y.integer_rating).to_i }.map(&:id)
      else return results.sort {|x,y| x.send(constraint) <=> y.send(constraint)}.map(&:id)
    end
  end

  def self.sorted_query(string, constraint, direction)
    query = self.search do
      fulltext string
    end
    direction == "up" ? sort_climbs_desc(query.results, constraint) : sort_climbs_asc(query.results, constraint)
  end

end