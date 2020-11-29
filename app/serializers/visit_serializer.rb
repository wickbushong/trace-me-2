class VisitSerializer < ActiveModel::Serializer
  attributes :id, :user, :business_id
  # belongs_to :user
end
