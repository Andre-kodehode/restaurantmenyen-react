export function Item({ items }) {
  console.log("items:", items);
  return items.map((item) => {
    return (
      <div className="item " key={item.id}>
        <h2 className="item-title item-border">{item.tittel}</h2>
        <p className="item-title-readable">{item.tittel}</p>
        <p className="text">Pris: {item.pris}</p>
        <p className="text">Ingredienser: {item.ingredienser}</p>
      </div>
    );
  });
}
