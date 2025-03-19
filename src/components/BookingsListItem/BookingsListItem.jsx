// import { Link } from "react-router-dom";
import { useState } from "react";

import "./BookingsListItem.scss";
import bookingsData from "../../data/bookingsData";

function bookingsListItem() {
  //get API functionality for bookings list from form and database
  const [bookings, setBookings] = useState(bookingsData);
  console.log(bookings);
  return (
    <>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            <p>{booking.pet_name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default bookingsListItem;
