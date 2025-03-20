// import { useState } from "react";

import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import "./BookingsPage.scss";

function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="about-main-content">
        <h1>Active Bookings</h1>
      </main>
      <Footer />
    </>
  );
}

export default AboutPage;
