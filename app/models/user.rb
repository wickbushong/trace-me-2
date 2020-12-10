class User < ApplicationRecord
    has_many :visits
    has_many :businesses, through: :visits
    has_many :reports

    has_secure_password
    validates :phone, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
end
