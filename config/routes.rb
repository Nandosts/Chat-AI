# frozen_string_literal: true

Rails.application.routes.draw do
  get 'image_generation/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  root 'chat#index'

  get '/chat', to: 'chat#index'
  get '/image_variants', to: 'image_variants#index'
  get '/image_generation', to: 'image_generation#index'
  post '/image_generation', to: 'image_generation#generate_image'
end
