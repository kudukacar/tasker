class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
  
        if @user.save
            login(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 402
        end
    end

    def index
        @taskers = User.where('tasker = true');
        render :index
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name, :zipcode, :tasker)
    end
end