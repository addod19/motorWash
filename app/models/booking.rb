class Booking < ApplicationRecord
  belongs_to :user

  validates :bookingDate, presence: true
  validates :bookingTime, presence: true
end
