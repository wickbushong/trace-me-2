class Visit < ApplicationRecord
    belongs_to :user
    belongs_to :business

    before_validation :rectify_doubles, if: :ongoing_visit

    scope :active, -> {where(time_out: nil)}
    
    def overlap_visits
        flagged_in = self.time_in
        flagged_out = self.time_out || Time.now
        self.business.visits.select do |v|
            check_in = v.time_in
            check_out = v.time_out || Time.now
            !(check_out < flagged_in) && !(check_in > flagged_out) && v != self
        end
    end

    private

    def ongoing_visit
        !self.user.visits.active.empty?
    end
    
    def rectify_doubles
        if self.user.visits.active.last.business == self.business
            errors.add(:user, :invalid, message: "already checked in")
            throw(:abort)
        else
            user.visits.active.each do |v| 
            binding.pry
            v.update(
                time_out: Time.now    
            ) unless v == self
            end
        end
    end

end
