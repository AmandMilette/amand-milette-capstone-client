// import { useState } from "react";

// import BookingsList from "../../components/BookingsList/BookingsList";
import Form from "../../components/Form/Form";
import "./ServicesPage.scss";

function ServicesPage() {
  return (
    <>
      <main className="booking-main-content">
        <h1 className="booking-main-content__title">Services</h1>

        <Form />
        {/* <BookingsList /> */}
      </main>
    </>
  );
}

export default ServicesPage;
