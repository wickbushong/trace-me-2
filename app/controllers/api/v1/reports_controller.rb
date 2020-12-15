class Api::V1::ReportsController < ApplicationController
  # skip_before_action :authenticate_entity, only: [:create]
  # before_action :set_report, only: [:show, :update, :destroy]

  def create
    if user = User.find_by(user_params)
      report = Report.create(test_date: report_params['test_date'], user_id: user.id)
      render json: report, status: :created
    else
      render json: {errors: ["User not found"]}, status: :unprocessable_entity
    end
  end

  private

  # def set_report
  #   @report = Report.find(params[:id])
  # end

  def user_params
    params.require(:report).permit(:first_name, :last_name, :email)
  end

  def report_params
    params.require(:report).permit(:test_date)
  end
end
