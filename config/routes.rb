Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index, :show]
    resources :tasker_cats, only: [:index, :show, :create]
  end
  root "static_pages#root"
end
