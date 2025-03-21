// import { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import "./AddBookingsPage.scss";

function AddBookingsPage() {
  return (
    <>
      <NavBar />
      <main className="add-main-content">
        <h1>Create A Booking</h1>
      </main>
      <Footer />
    </>
  );
}

export default AddBookingsPage;
