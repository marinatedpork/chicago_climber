class ClimbsController < ApplicationController

	def search
		@routes = Climb.query(climb_params[:search])
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
