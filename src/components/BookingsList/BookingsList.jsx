import { Link } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";
import "./BookingsList.scss";
import bookingsData from "../../data/bookingsData";
import BookingsListItem from "../BookingsListItem/BookingsListItem";

function BookingsList() {
  //get API functionality for bookings list from form and database
  const [bookings, setBookings] = useState(bookingsData);
  console.log(bookings);
  return (
    <>
      <ul className="booking-list">
        {bookings.map((booking) => (
          <Link to={``} key={booking.id}>
            <BookingsListItem booking={booking} />
          </Link>
        ))}
      </ul>
      <Link to={``} className="create-booking-button">
        <p className="create-booking-button__text">Create a Booking</p>
      </Link>
    </>
  );
}

export default BookingsList;
