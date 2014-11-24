class SessionsController < ApplicationController
	def new
		@user = User.new
		render :index
	end
end
