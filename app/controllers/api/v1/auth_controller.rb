class Api::V1::AuthController < ApplicationController
    skip_before_action :authenticate_entity, only: [:create]

    def create
      binding.pry
      entity = User.find_by(email: params[:entity][:email]) || Business.find_by(email: params[:entity][:email])
      if entity && entity.authenticate(params[:entity][:password])
        created_jwt = issue_token(entity)
        cookies.signed[:jwt] = {
          value:  created_jwt, 
          httponly: true,
          expires: 1.hour.from_now
        }
        render_serialized(entity)
        # render json: {entity.class.to_s.downcase.to_sym => entity}
      else
        render json: {
          errors: ['incorrect email or password']
        }
      end
    end

    def destroy
      binding.pry
      cookies.delete(:jwt)
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

    def render_serialized(entity)
      if entity.class.to_s == "User"
        render json: {user: UserSerializer.new(entity)}
      else
        render json: {business: BusinessSerializer.new(entity)}
      end
    end
end