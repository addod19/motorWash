class UsersController < ApplicationController
  before_action :authorized, only: [:auto_login]

  def create
    @user = User.new(user_params)
    if @user.save!
      token = encode_token({user_id: @user.id})
      render json: { user: @user, token: token }
    else
      render json: { error: 'Invalid email or password'}
    end
  end

  def login
    @user = User.find_by(email: params[:email])
    if @user && @user.authenticate(params[:password])
      token = encode_token({user_id: @user.id})
      render json: { user: @user, token: token }
    else
      render json: { error: 'Invalid email and password' }
    end
  end

  def auto_login
    render json: @user
  end

  private

  def user_params
    params.permit(:cname, :email, :password, :password_confirmation, :address1, :address2, :mobile, :location)
  end

end
