class Api::CategoriesController < ApplicationController
    def create
        @category = Category.create!(category_params)
        render :show
    end

    def index 
        @categories = Category.all
        render :index
    end

    private
    def category_params
        params.require(:category).permit(:title)
    end
end