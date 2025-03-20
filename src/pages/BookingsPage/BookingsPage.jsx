// import { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BookingsList from "../../components/BookingsList/BookingsList";

import "./BookingsPage.scss";

function BookingsPage() {
  return (
    <>
      <NavBar />
      <main className="booking-main-content">
        <h1 className="booking-main-content-title">Active Bookings</h1>
        <BookingsList />
      </main>
      <Footer />
    </>
  );
}

export default BookingsPage;
