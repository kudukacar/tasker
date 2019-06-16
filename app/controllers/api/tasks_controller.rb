class Api::TasksController < ApplicationController
    def show
        @task = Task.find(params[:id]);
        render :show
    end

    def create 
        @task = Task.new(task_params)
        if @task.save! 
            render :show 
        else 
            render json: @task.errors.full_messages, status: 402
        end

    end

    def index 
        @tasks = Task.all 
        render :index
    end

    def task_params
        params.require(:task).permit(:category_id, :detail, :user_id, :tasker_id, :status, :date, :time, :size, :start_address, :end_address)
    end
end