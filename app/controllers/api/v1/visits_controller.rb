require 'pry'

class Api::V1::VisitsController < ApplicationController
  before_action :set_visit, only: [:show, :update, :destroy]

  # GET /visits
  def index
    @visits = Visit.all

    render json: @visits
  end

  # GET /visits/1
  def show
    render json: @visit
  end

  # POST /visits
  def create
    binding.pry
    user = User.find_or_create_by(user_params)
    business = Business.find_by(id: params[:business_id])
    visit = Visit.new(
            user: user,
            business: business,
            time_in: Time.now
    )

    if visit.save
      render json: visit, status: :created
    else
      render json: visit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /visits/1
  def update
    if @visit.update(visit_params)
      render json: @visit
    else
      render json: @visit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /visits/1
  def destroy
    @visit.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_visit
      @visit = Visit.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def visit_params
      params.require(:visit).permit(:user_id, :business_id, :id)
    end

    def user_params
      params.require(:user).permit(:first_name, :last_name, :phone, :email)
    end
end
