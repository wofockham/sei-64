Rails.application.routes.draw do
  get 'works/index'
  get 'works/new'
  get 'works/edit'
  get 'works/show'
  resources :artists
  resources :works
end
