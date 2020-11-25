class CreateBusinesses < ActiveRecord::Migration[6.0]
  def change
    create_table :businesses do |t|
      t.text :name
      t.text :phone
      t.text :email
      t.text :location
      t.text :password_digest

      t.timestamps
    end
  end
end
