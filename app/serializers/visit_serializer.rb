class VisitSerializer < ActiveModel::Serializer
  attributes :id, :user, :business_id, :time_in, :time_out, :business
  attribute :overlap_visits, if: :flagged?

  def overlap_visits
    object.overlap_visits.map do |visit|
      VisitSerializer.new(visit)
    end
  end

  def flagged?
    !!object.flagged
  end
end
