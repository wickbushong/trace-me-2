class VisitSerializer < ActiveModel::Serializer
  attributes :id, :user, :business_id, :time_in, :business
  # belongs_to :user
end
