class Api::SessionsController < ApplicationController
  def create
    errors = []

    unless params[:user][:email].length > 0
      errors.push('Email cannot be empty')
    end

    unless params[:user][:password].length > 0
      errors.push('Password cannot be empty')
    end

    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      errors.push('Invalid credentials')
      render json: errors, status: 401
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
