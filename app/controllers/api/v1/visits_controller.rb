class Api::V1::VisitsController < ApplicationController
  # before_action :set_visit, only: [:show, :update, :destroy] 

  def index
    if params[:business_id]
      business = Business.find_by(id: params[:business_id])
      visits = business.visits.active
    else
      visits = Visit.all
    end
    render json: visits
  end

  def show
    visit = Visit.find(params[:id])
    visit.flagged = true
    render json: visit
  end

  def create
    user = User.find_or_create_by(user_params)
    business = Business.find_by(id: params[:business_id])
    check_double_visit(user, business)
    visit = Visit.new(
            user: user,
            business: business,
            time_in: Time.now
    )
    if visit.save
      render json: visit, status: :created
    else
      render json: {errors: visit.errors}, status: :unprocessable_entity
    end
  end

  def update
    visit = Visit.find_by(id: params[:visit_id])
    visit.time_out = Time.now
    if visit.save
      render json: visit
    else
      render json: {errors: visit.errors}, status: :unprocessable_entity
    end
  end

  private

  # def set_visit
  #   visit = Visit.find(params[:id])
  # end

  def check_double_visit(user, business)
    if user.visits.active.last.business == business
      render json: {errors: ["this person is already checked in"]}
    elsif !user.visits.active.empty?
      user.visits.active.each do |visit| 
        visit.time_out = Time.now
        visit.save
      end
    end
  end

  def visit_params
    params.require(:visit).permit(:user_id, :business_id, :id)
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :phone, :email)
  end
end
