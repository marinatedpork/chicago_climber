Rails.application.routes.draw do

  root      to: 'sessions#new'
  resources   :sessions, only: [:new, :create]
  resources   :users, except:  [:index, :update, :destroy] do
	  resources :tick_lists, only:  [:show, :create]
	end
  get '/users/:user_id/tick_lists/:id/delete' => 'tick_lists#delete'
  get '/users/:user_id/tick_lists/:id/delete_climb/:climb_id' => 'tick_lists#delete_climb'
	post '/users/:user_id/tick_lists/:id/edit' => 'tick_lists#edit'
  post '/users/:user_id/tick_lists/:id/add_climb' => 'tick_lists#add_climb'
  post '/search'      => 'climbs#search',   as: 'search'
  get  '/climbs'      => 'climbs#show'
  get  '/climbs_test' => 'climbs#show_test'
  get  '/logout'      => 'sessions#logout', as: 'logout'

end