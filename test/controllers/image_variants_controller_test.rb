# frozen_string_literal: true

require 'test_helper'

class ImageVariantsControllerTest < ActionDispatch::IntegrationTest
  test 'should get index' do
    get image_variants_index_url
    assert_response :success
  end
end
