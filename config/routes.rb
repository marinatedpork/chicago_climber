Rails.application.routes.draw do
  root      to: 'sessions#new'
  resources   :sessions, only: [:new, :create]
  resources   :users, except:  [:index] do
	  resources :tick_lists, except:  [:index]
	end
  post '/search' => 'climbs#search',   as: 'search'
  get  '/climbs' => 'climbs#show'
  get  '/logout' => 'sessions#logout', as: 'logout'
end