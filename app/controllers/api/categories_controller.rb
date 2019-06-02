class Api::CategoriesController < ApplicationController
    def index 
        @categories = Category.all
        render :index
    end

    def show
        @category = Category.find(params[:id]);
        render :show
    end

    private
    def category_params
        params.require(:category).permit(:title)
    end
end