class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: %i[create]

    def create
      user = User.find_by(params[:email])
      if user && user.authenticate(params[:password])
        binding.pry
        created_jwt = issue_token({id: user.id})
        cookies.signed[:jwt] = {value:  created_jwt, httponly: true}
        render json: {username: user.username}
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