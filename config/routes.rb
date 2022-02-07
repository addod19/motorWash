Rails.application.routes.draw do
  resources :users, only: [:create]
  resources :bookings, only: [:create, :show]
  post '/login', to: 'users#login'
  get 'auto_login', to: 'users#auto_login'
  delete '/logout', to: 'users#logout'
end
