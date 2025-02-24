import { useState } from "react";
import { Form } from "./Components/Form";
import { Logo } from "./Components/Logo";
import { PackingList } from "./Components/PackingList";
import { Stats } from "./Components/Stats";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function clearList() {
    const cleared = window.confirm("are you sure you wanna del all items?");
    if (cleared) setItems([]);
  }
  function handleCheckBox(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="App">
      <Logo />
      <Form addItems={handleAddItems} />
      <PackingList
        clearList={clearList}
        items={items}
        handleDelete={handleDeleteItems}
        handleCheck={handleCheckBox}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
