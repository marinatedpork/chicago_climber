class UsersController < ApplicationController

	def create
		@user = User.new(user_params)
		if @user.save
	  	session[:user_id] = @user.id
	  	render partial: 'show.html'
	  else
	  	@new_user_errors = @user.errors
	  	render partial: 'errors.html'
	  end
	end

  private

	def user_params
		params.require(:user).permit(:password, :password_confirmation, :email, :username)
	end

end
