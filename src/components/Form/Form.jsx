import "./Form.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
function Form() {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [description, setDescription] = useState("");
  const [petType, setPetType] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  function handlePetNameChange(e) {
    setPetName(e.target.value);
  }
  function handleOwnerNameChange(e) {
    setOwnerName(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handlePetTypeChange(e) {
    setPetType(e.target.value);
  }
  function handleTimestampChange(e) {
    setTimestamp(e.target.value);
  }
  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  async function postBooking(newBooking) {
    try {
      const response = await axios.post(`${API_URL}/bookings`, newBooking);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !petName.trim() ||
      !ownerName.trim() ||
      !description.trim() ||
      !timestamp.trim() ||
      !petType.trim() ||
      !category.trim()
    ) {
      alert("Please fill out all input fields");
      return;
    }

    const booking = {
      pet_name: petName,
      owner_name: ownerName,
      description: description,
      pet_type: petType,
      timestamp: timestamp,
      category: category,
    };
    await postBooking(booking);
    alert("Submitted");
    navigate("/bookings");
  }
  return (
    <>
      <div>
        <h2>Form</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="pet_name"
            placeholder="Enter your pet's name"
            value={petName}
            onChange={handlePetNameChange}
            className="booking-form__text"
          ></input>
          <input
            type="text"
            name="owner_name"
            placeholder="Enter your name"
            value={ownerName}
            onChange={handleOwnerNameChange}
            className="booking-form__text"
          ></input>
          <textarea
            name="description"
            placeholder="Enter pet care instructions"
            value={description}
            onChange={handleDescriptionChange}
            className="booking-form__text"
          />
          <select
            name="pet_type"
            required
            onChange={handlePetTypeChange}
            className="booking-form__text"
          >
            <option value="" disabled selected>
              Select a pet type
            </option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
          <input
            type="date"
            name="timestamp"
            value={timestamp}
            onChange={handleTimestampChange}
            className="booking-form__text"
          ></input>
          <select
            name="category"
            required
            onChange={handleCategoryChange}
            className="booking-form__text"
          >
            <option value="" disabled selected>
              Select a service
            </option>
            <option value="Day Care">Day Care</option>
            <option value="Boarding">Boarding</option>
            <option value="House Sitting">House Sitting</option>
          </select>
          <button type="submit">Add Booking</button>
        </form>
      </div>
    </>
  );
}

export default Form;
