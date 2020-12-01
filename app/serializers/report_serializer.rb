class ReportSerializer < ActiveModel::Serializer
  attributes :id, :flag_visits

  def flag_visits
    object.flag_visits.map do |visit|
      VisitSerializer.new(visit)
    end
  end
end
