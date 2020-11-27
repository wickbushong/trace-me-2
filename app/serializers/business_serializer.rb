class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :location
end
