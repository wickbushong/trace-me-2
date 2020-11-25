class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.text :first_name
      t.text :last_name
      t.text :phone
      t.text :email
      t.text :password_digest

      t.timestamps
    end
  end
end
