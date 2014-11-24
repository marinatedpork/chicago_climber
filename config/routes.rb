Rails.application.routes.draw do
  root to: 'sessions#new'
  resources :sessions, only: [:new, :create]
  resources :users, except: [:index]
end
