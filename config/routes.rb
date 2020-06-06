Rails.application.routes.draw do
  get 'pages/home'
  devise_for :users
  resources :albums do
  	resources :tracks, except: :index
  end

 	root to:'tracks#index'
 	
 	get 'albums/:id/display', to: 'albums#display', :as => :album_display
 #For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
