class VisitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :business_id
  # belongs_to :user
end
