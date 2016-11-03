Rails.application.routes.draw do
  root to: 'angular#index'
  get '/test', to: 'angular#test'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
