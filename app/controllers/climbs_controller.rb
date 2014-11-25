class ClimbsController < ApplicationController

	def search
		@routes = Climb.search(climb_params[:search])
  	render partial: 'results.html'
	end

	private
	def climb_params
		params.permit(:search)
	end
end
