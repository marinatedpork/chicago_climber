class SessionsController < ApplicationController
	def new
		@user = User.new
		render :index
	end

	def create
		@user = User.find_by_username(session_params[:username])
		if @user && @user.authenticate(session_params[:password])
			session[:user_id] = @user.id
			render partial: 'users/show.html'
		else 
			render partial: 'errors.html'
		end
	end

	def logout
		reset_session
		redirect_to :root
	end

	private
	def session_params
		params.permit(:username, :password)
	end
end
