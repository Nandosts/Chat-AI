# frozen_string_literal: true

require 'httparty'

class ImageGenerationController < ApplicationController
  def index; end

  def generate_image
    api_key = ENV['OPENAI_API_KEY']
    prompt = params[:prompt]
    response = HTTParty.post('https://api.openai.com/v1/images/generations',
                             headers: { 'Content-Type' => 'application/json',
                                        'Authorization' => "Bearer #{api_key}" },
                             body: { 'model' => 'image-alpha-001', 'size' => '1024x1024', 'prompt' => prompt }.to_json)
    render json: { 'data' => response['data'][0]['url'] }
  end
end
