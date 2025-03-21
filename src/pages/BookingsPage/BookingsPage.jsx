// import { useState } from "react";

import BookingsList from "../../components/BookingsList/BookingsList";

import "./BookingsPage.scss";

function BookingsPage() {
  return (
    <>
      <main className="booking-main-content">
        <h1 className="booking-main-content-title">Active Bookings</h1>
        <BookingsList />
      </main>
    </>
  );
}

export default BookingsPage;
