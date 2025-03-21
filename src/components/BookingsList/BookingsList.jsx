import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./BookingsList.scss";

import BookingsListItem from "../BookingsListItem/BookingsListItem";
const API_URL = import.meta.env.VITE_API_URL;
function BookingsList() {
  //get API functionality for bookings list from form and database
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    async function getBookings() {
      try {
        const response = await axios.get(`${API_URL}/bookings`);
        setBookings(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBookings();
  }, []);

  return (
    <>
      <ul className="booking-list">
        {bookings.map((booking) => (
          <Link to={``} key={booking.id}>
            <BookingsListItem booking={booking} />
          </Link>
        ))}
      </ul>
      <Link to={"/bookings/add"} className="create-booking-button">
        <p className="create-booking-button__text">Create a Booking</p>
      </Link>
    </>
  );
}

export default BookingsList;
