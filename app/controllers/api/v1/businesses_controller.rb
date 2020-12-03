class Api::V1::BusinessesController < ApplicationController
  skip_before_action :authorized, only: [:create]
  before_action :set_business, only: [:show, :update, :destroy]

  # GET /businesses
  # def index
  #   @businesses = Business.all

  #   render json: @businesses
  # end

  # GET /businesses/1
  # def show
  #   render json: @business
  # end

  # POST /businesses
  def create
    business = Business.new(business_params)
    if business.save
      token = encode_token({business_id: business.id})
      render json: {business: BusinessSerializer.new(business), jwt: token}, status: :created
    else
      render json: business.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /businesses/1
  # def update
  #   if @business.update(business_params)
  #     render json: @business
  #   else
  #     render json: @business.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /businesses/1
  # def destroy
  #   @business.destroy
  # end

  private
    # def set_business
    #   @business = Business.find(params[:id])
    # end

    def business_params
      params.require(:business).permit(:name, :email, :password, :phone, :location)
    end
end
