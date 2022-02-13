import { nanoid } from "nanoid";
import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryTable } from "./GroceryTable";

export const Grocery = () => {
  const [data, setData] = useState({
    name: "",
    quantity: "",
    status: false,
    id: nanoid(5)
  });

  const [list, setList] = useState([]);

  const handleInput = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const addItem = () => {
    setList([...list, data]);
    // setData({});
    console.log(list);
  };

  return (
    <>
      <GroceryInput handleInput={handleInput} addItem={addItem} data={data} />
      <GroceryTable list={list} />
    </>
  );
};
