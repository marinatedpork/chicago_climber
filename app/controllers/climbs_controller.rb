class ClimbsController < ApplicationController

	def search
		@routes = Climb.sub_query(climb_params[:search])
		@routes.to_json
  	render json: @routes
	end

	def show
		@routes = Climb.all.map(&:to_html).to_json	
		render json: @routes
	end

	def show_test
		@routes = Climb.first(1000).map(&:to_html).to_json	
		render json: @routes
	end
	
	private
	def climb_params
		params.permit(:search, :utf8, :authenticity_token)
	end
end
