class Api::V1::BusinessesController < ApplicationController
  skip_before_action :authenticate_entity, only: [:create]
  # before_action :set_business, only: [:show, :update, :destroy]

  def create
    business = Business.new(business_params)
    if business.save
      created_jwt = issue_token(business)
      cookies.signed[:jwt] = {
        value:  created_jwt, 
        httponly: true,
        expires: 1.hour.from_now
      }
      binding.pry
      render json: {business: BusinessSerializer.new(business)}, status: :created
    else
      render json: {errors: business.errors}, status: :unprocessable_entity
    end
  end

  private
    # def set_business
    #   @business = Business.find(params[:id])
    # end

    def business_params
      params.require(:business).permit(:name, :email, :password, :phone, :location)
    end
end
