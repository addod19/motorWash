class BookingsController < ApplicationController

  def create
    @booking = Bookings.new(bookings_params)

    if @booking.save!
      render json: { booking: @booking, msg: "Booking created" }
    else
      render json: { error: "Booking could not be created!!! Oooooopps" }
    end
  end

  def show
    @booking = Bookings.find_by(bookings_id)
    
    if @booking
      render json: { booking: @booking, msg: "Success" }
    else
      render json: { error: "Error displaying booking" }
    end
  end

  private

  def bookings_params
    params.require(:bookingDate, :bookingTime, :user_id)
  end

end
