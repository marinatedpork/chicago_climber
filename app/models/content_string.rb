class ContentString < ActiveRecord::Base
	serialize :content, JSON
end
