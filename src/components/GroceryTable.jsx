import React from "react";

export const GroceryTable = ({ list }) => {
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
          {list.map((el) => {
            return (
              <tr>
                <td>{el.name}</td>
                <td>{el.quantity}</td>
                <td>
                  <button onClick={(id) => {}}>
                    {el.status ? "Done" : "Not Yet"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
