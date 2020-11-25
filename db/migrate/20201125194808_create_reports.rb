class CreateReports < ActiveRecord::Migration[6.0]
  def change
    create_table :reports do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.timestamptz :test_date
      t.text :test_type

      t.timestamps
    end
  end
end
