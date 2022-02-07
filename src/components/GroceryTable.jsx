import React from "react";

export const GroceryTable = (data) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Quantity</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((el) => (
            <tr>
              <td>{el.name}</td>
              <td>{el.quantity}</td>
              <td>
                <button>{el.status ? "Done" : "Pending"}</button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
};
