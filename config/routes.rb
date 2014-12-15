Rails.application.routes.draw do
  root      to: 'sessions#new'
  resources   :sessions, only: [:new, :create]
  resources   :users, except:  [:index] do
	  resources :tick_lists, only:  [:show, :create]
	end
	post '/users/:user_id/tick_lists/:id/add_climb' => 'tick_lists#add_climb'
  post '/search' => 'climbs#search',   as: 'search'
  get  '/climbs' => 'climbs#show'
  get  '/logout' => 'sessions#logout', as: 'logout'
end