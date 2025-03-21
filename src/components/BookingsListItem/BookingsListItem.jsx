// import { Link } from "react-router-dom";

import "./BookingsListItem.scss";

function BookingsListItem({ booking }) {
  //get API functionality for bookings list from form and database

  return (
    <>
      <li className="booking-list-item">
        <div className="item-heading">
          <p className="item-heading__date">
            {new Date(booking.timestamp).toLocaleDateString("en-US", {
              timeZone: "UTC",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </p>
          <p className="item-heading__name">{booking.pet_name}</p>
        </div>
        <p className="booking-list-item__description">{booking.description}</p>
      </li>
    </>
  );
}

export default BookingsListItem;
