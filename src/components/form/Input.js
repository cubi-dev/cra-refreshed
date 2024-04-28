import React, { useState } from "react";

const Input = () => {
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");

  const handleInputChange = (event) => {
    // console.log(event.target.value);
    setFullName(event.target.value);
  };
  const handleTextAreaChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSelectChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div className="p-5">
      {fullName}
      <input
        type="text"
        name="fullname"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      {message}
      <textarea
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your message"
        name="message"
        onChange={handleTextAreaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select>
    </div>
  );
};

export default Input;
