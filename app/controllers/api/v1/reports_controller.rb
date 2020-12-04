class Api::V1::ReportsController < ApplicationController
  skip_before_action :authorized, only: [:create]
  before_action :set_report, only: [:show, :update, :destroy]

  # GET /reports
  def index
    @reports = Report.all

    render json: @reports
  end

  # GET /reports/1
  def show
    render json: @report
  end

  # POST /reports
  def create
    user = User.find_by(user_params)
    report = Report.new(test_date: report_params['test_date'], user_id: user.id)

    if report.save
      render json: report, status: :created
    else
      binding.pry
      render json: {errors: report.errors}, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /reports/1
  def update
    if @report.update(report_params)
      render json: @report
    else
      render json: @report.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reports/1
  def destroy
    @report.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_report
      @report = Report.find(params[:id])
    end

    def user_params
      params.require(:report).permit(:first_name, :last_name, :email)
    end

    # Only allow a trusted parameter "white list" through.
    def report_params
      params.require(:report).permit(:test_date)
    end
end
