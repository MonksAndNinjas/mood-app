class AuthenticationsController < ApplicationController
  def index
      render(status: 200, json: Authentication)
  end
end
