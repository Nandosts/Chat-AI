# frozen_string_literal: true

Rails.application.routes.draw do
  root 'chat#index'

  resources :chat, only: [:index]
  resources :image_variants, only: [:index]
  resources :image_generation, only: [:index]
  post '/image_generation', to: 'image_generation#generate_image'

end
