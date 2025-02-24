import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ items, handleDelete, handleCheck, clearList }) {
  const [orderBy, setOrderby] = useState("Input");
  let sorted;
  if (orderBy === "Input") {
    sorted = items;
  } else if (orderBy === "Description") {
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {console.log(items)}
        {sorted.map((items) => (
          <Item
            item={items}
            key={items.id}
            handledelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={orderBy} onChange={(e) => setOrderby(e.target.value)}>
          <option value={"Input"}>Input</option>
          <option value={"Description"}>Description</option>
          <option value={"Packed"}>Packed</option>
        </select>
        <button onClick={clearList}>clear list</button>
      </div>
    </div>
  );
}
