class TickList < ActiveRecord::Base
	belongs_to :user
	has_and_belongs_to_many :climbs

	def to_drop_down
		return "<li role='presentation' class='tickListOption pointer' data-url='/users/#{user.id}/tick_lists/#{id}'>#{name}</li>"
	end

	def to_sidebox_display
		html_string   = "<ol data-url='/users/#{user.id}>/tick_lists/#{id}>/add_climb'>"
		climbs.each { |climb| html_string << climb.to_html }
		html_string   += "</ol>"
	end

end
