import React from "react";

export const GroceryInput = ({ handleInput, addItem, name, quantity }) => {
  return (
    <div>
      <h1>Grocery Requirement List</h1>
      <label>Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter Grocery Name"
        onInput={handleInput}
        value={name}
      />
      <br />
      <br />
      <label>Quantity</label>
      <input
        type="text"
        name="quantity"
        placeholder="Enter Quantity"
        onInput={handleInput}
        value={quantity}
      />
      <br />
      <br />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};
