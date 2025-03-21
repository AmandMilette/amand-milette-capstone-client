import "./Form.scss";
import { useState } from "react";

function Form() {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [description, setDescription] = useState("");
  const [petType, setPetType] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [category, setCategory] = useState("");

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

  function handleSubmit(e) {
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
      petName,
      ownerName,
      description,
      petType,
      timestamp: new Date(timestamp).getTime(),
      category,
    };
    console.log(booking);
    alert("Submitted");
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
          />
          <select name="pet_type" required onChange={handlePetTypeChange}>
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
          ></input>
          <select name="category" required onChange={handleCategoryChange}>
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
