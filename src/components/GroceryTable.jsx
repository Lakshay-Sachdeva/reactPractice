import React from "react";

export const GroceryTable = ({ name, quantity, id, handleStatus, status }) => {
  return (
    <>
      {status ? (
        <></>
      ) : (
        <div>
          <div>{name}</div>
          <div>{quantity}</div>
          <button
            onClick={() => {
              handleStatus(id);
            }}
          >
            Clear
          </button>
        </div>
      )}
    </>
  );
};
