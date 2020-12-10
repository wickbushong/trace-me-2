class Business < ApplicationRecord
    has_many :visits
    has_many :users, through: :visits

    has_secure_password
    validates :email, uniqueness: true, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :name, presence: true

    def active_visits
        self.visits.select do |v|
            v.time_out == nil
        end
    end
end
