class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.datetime :bookingDate
      t.datetime :bookingTime
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
