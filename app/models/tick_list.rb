class TickList < ActiveRecord::Base
	belongs_to :user
	has_and_belongs_to_many :climbs

	def to_drop_down
		return "<option value=#{id} data-url='/users/#{user.id}/tick_lists/#{id}'>#{name}</option>"
	end

	def to_sidebox_display
		html_string    = "<h4 data-url='/users/#{user.id}/tick_lists/#{id}/add_climb' >#{name}</h4>"
		html_string   += "<ol>"
		climbs.each { |climb| html_string << climb.to_html }
		html_string   += "</ol>"
	end

end
