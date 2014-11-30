class ClimbsController < ApplicationController

	def search
		@routes = Climb.search(climb_params[:search])
  	render partial: 'results.html'
	end

	def show
		@routes = Climb.all	
		@routes.to_json
		render json: @routes
	end

	private
	def climb_params
		params.permit(:search)
	end
end
