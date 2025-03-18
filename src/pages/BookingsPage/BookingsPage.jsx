// import { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BookingsList from "../../components/BookingsList/BookingsList";

import "./BookingsPage.scss";

function BookingsPage() {
  return (
    <>
      <NavBar />
      <h1>BookingsList Component</h1>
      <BookingsList />
      <Footer />
    </>
  );
}

export default BookingsPage;
