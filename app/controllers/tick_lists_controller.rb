class TickListsController < ApplicationController

	def create
		tick_list = TickList.create!(tick_list_params)
		current_user.tick_lists << tick_list
		tick_list_views = [tick_list.to_drop_down, tick_list.to_sidebox_display].to_json
		render json: tick_list_views
	end

	def show
		@tick_list = current_user.tick_lists.find(params[:id])
		render partial: "show.html"
	end

	def add_climb
		tick_list = TickList.find(params[:id])
		tick_list.climbs << Climb.find(tick_list_params[:climb_id].to_i)
		render nothing: true
	end

	def delete 
		TickList.find(params[:id]).destroy
		render nothing: true
	end

	def edit
		tick_list = TickList.find(params[:id])
		tick_list.update_attributes(name: tick_list_params[:name])
		render nothing: true
	end

  private

	def tick_list_params
		params.permit(:name, :id, :user_id, :climb_id)
	end
end
