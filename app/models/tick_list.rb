class TickList < ActiveRecord::Base
	include Rails.application.routes.url_helpers
	belongs_to :user
	has_and_belongs_to_many :climbs

	def to_drop_down
		html_string = "<li role='presentation'>"
	  html_string << "<span class='tickListOption pointer' data-url='#{user_tick_list_path(user, self)}'>#{name}</span>" 
	  html_string << "<i class='fa fa-pencil float-right block edit-list'></i>"
	  html_string << "<i class='fa fa-trash float-right block delete-list'></i>" 
	  return html_string += "</li>"
	end

	def to_sidebox_display
		html_string   = "<ol data-url='/users/#{user.id}>/tick_lists/#{id}>'>"
		climbs.each { |climb| html_string << climb.to_tick_list }
		html_string   += "</ol>"
	end

end


