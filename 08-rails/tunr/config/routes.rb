Rails.application.routes.draw do
  root :to => 'pages#home'  
  resources :users, :only => [:index, :new, :create]
  resources :mixtapes, :only => [:new, :create]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
