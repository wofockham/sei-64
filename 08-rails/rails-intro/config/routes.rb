Rails.application.routes.draw do
  root :to => 'pages#hello'

  get '/hello' => 'pages#hello' # 'controller#action'
  get '/ciao' => 'pages#goodbye', :as => :goodbye
  get '/funny' => 'pages#funny'
  get '/helpers' => 'pages#helpers'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'
end
