class Api::V1::UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]
  skip_before_action :authenticate_entity, only: [:create]

  def create
    user = User.new(user_params)
    if user.save
      created_jwt = issue_token(user)
        cookies.signed[:jwt] = {
          value:  created_jwt, 
          httponly: true,
          expires: 1.hour.from_now
        }
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
