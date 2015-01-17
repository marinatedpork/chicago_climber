class AppearanceController < ApplicationController

	def create
		Appearance.create!(climb: Climb.find(appearance_params[:climb_id]), tick_list: TickList.find(params[:tick_list_id]))
		render nothing: true
	end

	def destroy
		current_user.tick_lists.find(params[:tick_list_id]).appearances.where("climb_id = ?", params[:climb_id]).first.destroy!
		render nothing: true
	end

  private

	def appearance_params
		params.permit(:user_id, :tick_list_id, :climb_id)
	end
end
