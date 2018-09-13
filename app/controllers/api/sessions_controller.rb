class Api::SessionsController < ApplicationController
  def create
    if (!params[:user][:email]) {
      render json: ['Email cannot be empty'], status 401
    }
    if (!params[:user][:password]) {
      render json: ['Password cannot be empty'], status 401
    }
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid email or password'], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['There is no current user'], status: 404
    end

  end
end
