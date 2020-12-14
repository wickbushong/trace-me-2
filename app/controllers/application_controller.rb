class ApplicationController < ActionController::API
    include ::ActionController::Cookies
    # before_action :authorized
    
    def jwt_key
        Rails.application.credentials.jwt_key
    end

    def issue_token(entity)
        JWT.encode({(entity.class.to_s.downcase + "_id").to_sym => entity.id}, jwt_key, 'HS256')
    end
    
    def encode_token(payload)
        # payload => { beef: 'steak' }
        # TODO: add expiration for token
        JWT.encode(payload, ENV['SECRET_KEY'])
        # jwt string: "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI"
    end

    def auth_header
    # { 'Authorization': 'Bearer <token>' }
        request.headers['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            # headers: { 'Authorization': 'Bearer <token>' }
            begin
                JWT.decode(token, ENV['SECRET_KEY'], true, algorithm: 'HS256')
                # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
            rescue JWT::DecodeError
                {errors: ["invalid token"]}
            # TODO: rescue from expired token
            end
        end
    end

    def current_business
        if decoded_token
          # decoded_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
          # or nil if we can't decode the token
          business_id = decoded_token[0]['business_id']
          business = Business.find_by(id: business_id)
          return business
        end
    end
    
    def logged_in?
        !!current_business
    end

    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end

    def snake_case_params
        request.parameters.deep_transform_keys!(&:underscore)
    end
end
