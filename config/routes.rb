Rails.application.routes.draw do

  root 'chatroom#index'

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'


  get 'signup', to: 'users#new'
  resources :users, except: [:new]

  post 'message', to: 'messages#create'

  mount ActionCable.server, at: '/cable'
end
