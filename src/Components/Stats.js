export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start packing already!</em>
      </p>
    );
  const total_items = items.length;
  const packed_items = items.filter((item) => item.packed).length;
  const percentage = (packed_items / total_items) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `Congratulations you are all set to go!`
          : `You have ${total_items} items on the list, and you already packed
          ${packed_items} (${percentage}%)`}
      </em>
    </footer>
  );
}
