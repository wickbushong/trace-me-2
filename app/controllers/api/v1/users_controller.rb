class Api::V1::UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]
  skip_before_action :authorized, only: [:create]


  def create
    # binding.pry
    user = User.new(user_params)
    if user.save
      render json: {user: UserSerializer.new(user)}, status: :created
    else
      render json: {errors: user.errors}, status: :unprocessable_entity
    end
  end

  private
  
  def set_user
    user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :phone, :password)
  end
end
