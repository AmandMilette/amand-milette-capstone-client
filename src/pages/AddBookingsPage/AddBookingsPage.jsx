// import { useState } from "react";

import "./AddBookingsPage.scss";
import Form from "../../components/Form/Form";

function AddBookingsPage() {
  return (
    <>
      <main className="booking-main-content">
        <h1 className="booking-main-content__title">Book With Me</h1>
        <Form />
      </main>
    </>
  );
}

export default AddBookingsPage;
