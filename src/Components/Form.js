import { useState } from "react";

export function Form({ addItems }) {
  const [description, setDescription] = useState("");
  const [numofitems, setNumOfItems] = useState(1);
  function SubmitForm(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, numofitems, packed: false, id: Date.now() };
    addItems(newItem);
    setDescription("");
    setNumOfItems(1);
  }

  return (
    <form onSubmit={SubmitForm} className="add-form">
      <h3>Whats items do you need?</h3>
      <select
        value={numofitems}
        onChange={(e) => {
          setNumOfItems(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
