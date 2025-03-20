// import { Link } from "react-router-dom";

import "./BookingsListItem.scss";

function BookingsListItem({ booking }) {
  //get API functionality for bookings list from form and database

  console.log(bookings);
  return (
    <>
      <div className="booking">
        <div className="booking_petname">{booking.pet_name}</div>
      </div>
    </>
  );
}

export default BookingsListItem;
