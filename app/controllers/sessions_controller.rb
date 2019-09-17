class SessionsController < ApplicationController
  def create
#    @user = User.find_or_create_by(uid: auth['uid']) do |u|
#      u.name = auth['info']['name']
#    end

#    session[:user_id] = @user.id
    auth_hash = request.env['omniauth.auth']

    render :text => auth_hash.inspect
  end

  private

#  def auth
#    request.env['omniauth.auth']
#  end
end
