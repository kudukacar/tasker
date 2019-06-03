class Api::TaskerCatsController < ApplicationController
    def index
        @taskercats = TaskerCat.all 
        render :index
    end

    def show
        @taskercat = TaskerCat.find(params[:id]);
        render :show
    end

    def create 
        @taskercat = TaskerCat.new(tasker_cat_params)
        if @taskercat.save 
            render :show 
        else 
            render json: @taskercat.errors.full_messages, status: 402
        end

    end

    def tasker_cat_params
        params.require(:tasker_cat).permit(:category_id, :user_id, :hourly_rate, :skills_description)
    end
end