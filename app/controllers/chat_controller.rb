# frozen_string_literal: true

require 'openai'

class ChatController < ApplicationController
  def index
    @message = params[:message] || ''
    return unless @message.present?

    @response = generate_response(@message)
  end

  private

  def generate_response(message)
    client = OpenAI::Client.new(access_token: ENV['OPENAI_API_KEY'])

    # begin
    response = client.completions(
      parameters: {
        model: ENV['OPENAI_MODEL'] || 'text-davinci-002',
        prompt: message,
        max_tokens: ENV['OPENAI_MAX_TOKENS'] || 150,
        n: ENV['OPENAI_N'] || 1,
        stop: ENV['OPENAI_STOP'] || nil,
        temperature: ENV['OPENAI_TEMPERATURE'] || 0.7
      }
    )
    # rescue OpenAI::APIError => e
    #   Rails.logger.error("OpenAI API Error: #{e}")
    #   return "Desculpe, ocorreu um erro ao gerar uma resposta."
    # end

    return response.dig('choices', 0, 'text') if response.dig('choices', 0, 'text').present?

    'Desculpe, não consegui gerar uma resposta a partir da entrada fornecida.'
  end
end
