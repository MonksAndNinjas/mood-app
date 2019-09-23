class LoginController < ApplicationController

  def create
  #  query_params = {
  #    client_id: ENV['CLIENT_ID'],
  #    response_type: "code",
  #    redirect_uri: ENV['REDIRECT_URI'],
  #    show_dialog: true
  #  }
    redirect_to "https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22B4Y3&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Ffitbit%2Fcallback&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"
  end
end
