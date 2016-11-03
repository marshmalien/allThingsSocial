Rails.application.routes.draw do
  root to: 'angular#homepage'
  get '/homepage', to: 'angular#homepage'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
