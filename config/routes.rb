Rails.application.routes.draw do
  get 'image_generation/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  get '/chat', to: 'chat#index'
  get '/image_variants', to: 'image_variants#index'
  get '/image_generation', to: 'image_generation#index'
  post '/image_generation', to: 'image_generation#generate_image'

end
