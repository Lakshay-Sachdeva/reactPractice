import { nanoid } from "nanoid";
import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryTable } from "./GroceryTable";

export const Grocery = () => {
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    const grocery = {
      name: e.name,
      quantity: e.quantity,
      status: false,
      id: nanoid(5)
    };
    setList([...list, grocery]);
  };

  const handleStatus = (el) => {
    let item = list.filter((e) => {
      return e.id === el;
    });
    item = item[0];
    item.status = !item.status;
    setList([...list]);
  };

  return (
    <>
      <GroceryInput handleInput={handleInput} />
      {list.map((el) => (
        <GroceryTable key={el.id} {...el} handleStatus={handleStatus} />
      ))}
    </>
  );
};
