class CreateVisits < ActiveRecord::Migration[6.0]
  def change
    create_table :visits do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :business_id, null: false, foreign_key: true
      t.timestamptz :time_in
      t.timestamptz :time_out
      t.boolean :flagged
      t.boolean :employee
      t.integer :party_size

      t.timestamps
    end
  end
end
