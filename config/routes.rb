Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resource :session, only: [:create, :destroy]
    get '/questions/search', to: 'questions#search'
    resources :questions, only: [:create, :index, :destroy, :show, :update]
    resources :answers, only: [:create, :show, :index, :update, :destroy]
    resources :votes, only: [:create]
  end
end
