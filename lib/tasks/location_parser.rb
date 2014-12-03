class LocationParser

	def self.parse_locations
		CSV.foreach('db/locations_w_url.csv') do |row|
			url = row[0]
			data = update_attributes = row[1..-1]
			climb = Climb.find_by_url(url)
			if climb
  			location_attributes = location_attr(data)
  			puts climb.id
  			next if location_attributes.nil?
  			climb.update_attributes(location_attributes)
  			puts climb.attributes
			end
		end
	end

  def self.location_attr(location_data)
  	if location_data.nil?
  		return nil
  	else
	  	case location_data.size
		    when 7 then state_area_subarea_crag_section_face_wall(location_data)
		    when 6 then state_area_subarea_crag_section_wall(location_data)
		    when 5 then state_area_subarea_crag_wall(location_data)
		    when 4 then state_area_subarea_wall(location_data)
	   		when 3 then state_area_wall(location_data)      
	    	when 2 then state_wall(location_data)
	    	when 1 then state(location_data)
	    	else nil
    	end
    end
  end

  def self.state_area_subarea_crag_section_face_wall(location_data)
    state   = State.find_or_create_by(name:location_data[0])
    area    = Area.find_or_create_by(name:location_data[1])
    subarea = Subarea.find_or_create_by(name:location_data[2])
    crag    = Crag.find_or_create_by(name:location_data[3])
    section = Section.find_or_create_by(name:location_data[4])
    face    = Face.find_or_create_by(name:location_data[5])
    wall    = Wall.find_or_create_by(name:location_data[6])
    state.areas     << area    
    state.subareas  << subarea 
    state.crags     << crag    
    state.sections  << section    
    state.faces     << face    
    state.walls     << wall    
    area.subareas   << subarea 
    area.crags      << crag    
    area.sections   << section    
    area.faces      << face    
    area.walls      << wall    
    subarea.crags   << crag    
    subarea.sections<< section   
    subarea.faces   << face    
    subarea.walls   << wall    
    crag.sections   << section
    crag.faces      << face
    crag.walls      << wall
    section.faces   << face 
    section.walls   << wall 
    face.walls      << wall
    attributes = {state: state, area: area, subarea: subarea, crag: crag, section: section, face: face, wall: wall}
    return attributes
  end

  def self.state_area_subarea_crag_section_wall(location_data)
	  state   = State.find_or_create_by(name:location_data[0])
    area    = Area.find_or_create_by(name:location_data[1])
    subarea = Subarea.find_or_create_by(name:location_data[2])
    crag    = Crag.find_or_create_by(name:location_data[3])
    section = Section.find_or_create_by(name:location_data[4])
    wall    = Wall.find_or_create_by(name:location_data[5])
    state.areas     << area    
    state.subareas  << subarea 
    state.crags     << crag    
    state.sections  << section    
    state.walls     << wall    
    area.subareas   << subarea 
    area.crags      << crag    
    area.sections   << section    
    area.walls      << wall    
    subarea.crags   << crag    
    subarea.sections<< section   
    subarea.walls   << wall    
    crag.sections   << section
    crag.walls      << wall
    section.walls   << wall 
    attributes = {state: state, area: area, subarea: subarea, crag: crag, section: section, wall: wall}
    return attributes
  end

  def self.state_area_subarea_crag_wall(location_data)
		state   = State.find_or_create_by(name:location_data[0])
    area    = Area.find_or_create_by(name:location_data[1])
    subarea = Subarea.find_or_create_by(name:location_data[2])
    crag    = Crag.find_or_create_by(name:location_data[3])
    wall    = Wall.find_or_create_by(name:location_data[4])
    state.areas     << area    
    state.subareas  << subarea 
    state.crags     << crag    
    state.walls     << wall    
    area.subareas   << subarea 
    area.crags      << crag    
    area.walls      << wall    
    subarea.crags   << crag    
    subarea.walls   << wall    
    crag.walls      << wall
    attributes = {state: state, area: area, subarea: subarea, crag: crag, wall: wall}
    return attributes
  end

  def self.state_area_subarea_wall(location_data)
	  state   = State.find_or_create_by(name:location_data[0])
    area    = Area.find_or_create_by(name:location_data[1])
    subarea = Subarea.find_or_create_by(name:location_data[2])
    wall    = Wall.find_or_create_by(name:location_data[3])
    state.areas    << area    
    state.subareas << subarea 
    state.walls    << wall    
    area.subareas  << subarea 
    area.walls     << wall    
    subarea.walls  << wall    
    attributes = {state: state, area: area, subarea: subarea, wall: wall}
    return attributes
  end

  def self.state_area_wall(location_data)
  	state = State.find_or_create_by(name:location_data[0])     
    area  = Area.find_or_create_by(name:location_data[1])      
    wall  = Wall.find_or_create_by(name:location_data[2])      
    state.areas    << area
    state.walls    << wall
    area.walls     << wall
    attributes = {state: state, area: area, wall: wall}
    return attributes
  end

  def self.state_wall(location_data)
    state = State.find_or_create_by(name:location_data[0])
    wall  = Wall.find_or_create_by(name:location_data[1])
    state.walls    << wall
    attributes = {state: state, wall: wall}
    return attributes
  end

  def self.state(location_data)
		state = State.find_or_create_by(name:location_data[0])
    attributes = {state: state}
    return attributes
  end
end