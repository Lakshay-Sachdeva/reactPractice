import React, { useState } from "react";

export const GroceryInput = ({ handleInput }) => {
  const [data, setData] = useState({
    name: "",
    quantity: ""
  });
  const textChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div>
      <h1>Grocery Requirement List</h1>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter Grocery Name"
        onInput={textChange}
      />
      <br />
      <br />
      <label>Quantity</label>
      <input
        type="text"
        name="quantity"
        placeholder="Enter Quantity"
        onInput={textChange}
      />
      <br />
      <br />
      <button
        onClick={() => {
          handleInput(data);
        }}
      >
        Add Item
      </button>
    </div>
  );
};
