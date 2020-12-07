class Api::V1::BusinessesController < ApplicationController
  skip_before_action :authorized, only: [:create]
  # before_action :set_business, only: [:show, :update, :destroy]

  def create
    business = Business.new(business_params)
    if business.save
      token = encode_token({business_id: business.id})
      render json: {business: BusinessSerializer.new(business), jwt: token}, status: :created
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
