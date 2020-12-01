class CreateVisits < ActiveRecord::Migration[6.0]
  def change
    create_table :visits do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :business_id, null: false, foreign_key: true
      t.timestamp :time_in
      t.timestamp :time_out
      t.boolean :flagged
      t.integer :overlap_time
      t.boolean :employee
      t.integer :party_size

      t.timestamps
    end
  end
end
