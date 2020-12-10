class Api::V1::UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]

  def create
    binding.pry
    user = User.new(user_params)

    if user.save
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  private
  
  def set_user
    user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name)
  end
end
