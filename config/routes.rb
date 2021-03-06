Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :reports
      resources :visits
      resources :businesses do
        resources :visits
      end
      resources :users
      resources :auth
    end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
