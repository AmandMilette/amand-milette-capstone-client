// import { useState } from "react";

import "./AddBookingsPage.scss";
import Form from "../../components/Form/Form";

function AddBookingsPage() {
  return (
    <>
      <main className="booking-main-content">
        <h1 className="booking-main-content-title">Add a Booking</h1>
        <Form />
      </main>
    </>
  );
}

export default AddBookingsPage;
