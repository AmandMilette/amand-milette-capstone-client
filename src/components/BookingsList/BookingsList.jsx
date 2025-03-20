// import { Link } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./BookingsList.scss";
import bookingsData from "../../data/bookingsData";
import BookingsListItem from "../BookingsListItem/BookingsListItem";

function BookingsList() {
  //get API functionality for bookings list from form and database
  const [bookings, setBookings] = useState(bookingsData);
  console.log(bookings);
  return (
    <>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <p>{booking.pet_name}</p>
            <p>{booking.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookingsList;
