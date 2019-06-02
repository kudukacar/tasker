Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :categories, only: [:index]
  end
  root "static_pages#root"
end
