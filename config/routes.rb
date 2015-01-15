Rails.application.routes.draw do

  root      to: 'sessions#new'
  resources   :sessions, only: [:new, :create]
  resources   :users, except:  [:index, :update, :destroy] do
	  resources :tick_lists, only:  [:show, :create]
	end
  get '/users/:user_id/tick_lists/:id/delete' => 'tick_lists#delete'
  post '/users/:user_id/tick_lists/:id/edit' => 'tick_lists#edit'
  get '/users/:user_id/tick_lists/:tick_list_id/delete_climb/:climb_id' => 'appearance#destroy'
  post '/users/:user_id/tick_lists/:tick_list_id/add_appearance' => 'appearance#create'
  post '/search'      => 'climbs#search',   as: 'search'
  get  '/climbs'      => 'climbs#show'
  get  '/climbs_test' => 'climbs#show_test'
  get  '/logout'      => 'sessions#logout', as: 'logout'

end