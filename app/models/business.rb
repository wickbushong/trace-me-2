class Business < ApplicationRecord
    has_many :visits
    has_many :users, through: :visits

    has_secure_password
    validates :email, uniqueness: true, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
