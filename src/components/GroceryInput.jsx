import React from "react";

export const GroceryInput = () => {
  return (
    <div>
      <h1>Grocery Requirement List</h1>
      <label>Name</label>
      <input type="text" name="name" placeholder="Enter Grocery Name" />
      <br />
      <br />
      <label>Quantity</label>
      <input type="text" name="quantity" placeholder="Enter Quantity" />
      <br />
      <br />
      <button>Add Item</button>
    </div>
  );
};
