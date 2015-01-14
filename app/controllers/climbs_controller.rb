class ClimbsController < ApplicationController

	def search
		if climb_params[:sort_type]
			@routes	= Climb.sorted_query(climb_params[:search], climb_params[:sort_type], climb_params[:direction])
		else
			@routes = Climb.query(climb_params[:search])
		end
		@routes.to_json
  	render json: @routes
	end

	def show
		@routes = ContentString.first.content
		render json: @routes
	end

	private
	def climb_params
		params.permit(:search, :sort_type, :direction, :utf8, :authenticity_token)
	end
end
