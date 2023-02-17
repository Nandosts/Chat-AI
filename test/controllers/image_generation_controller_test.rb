# frozen_string_literal: true

require 'test_helper'

class ImageGenerationControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get image_generation_index_url
    assert_response :success
  end
end
