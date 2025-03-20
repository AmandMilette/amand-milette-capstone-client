// import { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BookingsList from "../../components/BookingsList/BookingsList";

import "./BookingsPage.scss";

function BookingsPage() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <h1>Active Bookings</h1>
        <BookingsList />
      </main>
      <Footer />
    </>
  );
}

export default BookingsPage;
