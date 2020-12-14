class Api::V1::AuthController < ApplicationController
    # skip_before_action :authorized, only: [:create]

    def create
      entity = User.find_by(email: params[:entity][:email]) || Business.find_by(email: params[:entity][:email])
      if entity && entity.authenticate(params[:entity][:password])
        created_jwt = issue_token(entity)
        cookies.signed[:jwt] = {value:  created_jwt, httponly: true}
        render json: {entity.class.to_s.downcase.to_sym => entity}
      else
        render json: {
          error: 'Username or password incorrect'
        }, status: 404
      end
    end
    
    # def create
    #   # binding.pry
    #   if current_business
    #       business = current_business
    #       render json: business
    #     else
    #       business = Business.find_by(email: business_login_params[:email])
    #       #User#authenticate comes from BCrypt
    #       if business && business.authenticate(business_login_params[:password])
    #         # encode token comes from ApplicationController
    #         token = encode_token({ business_id: business.id })
    #         render json: { business: BusinessSerializer.new(business), jwt: token }, status: :accepted
    #       else
    #         render json: {errors: ['Invalid email or password']}, staus: :unprocessable_entity
    #       end
    #     end
    # end

    private

    def business_login_params
        params.require(:business).permit(:email, :password)
    end
end