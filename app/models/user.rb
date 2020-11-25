class User < ApplicationRecord
    has_many :visits
    has_many :businesses, through: :visits
    has_many :reports
end
