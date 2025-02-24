export function Item({ item, handledelete, handleCheck }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        value={item.packed}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.numofitems} {item.description}
      </span>
      <button onClick={() => handledelete(item.id)}>❌</button>
    </li>
  );
}
