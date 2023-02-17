Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/chat', to: 'chat#index'
  get '/image_variants', to: 'image_variants#index'

end
