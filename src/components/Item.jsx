export function Item({ sortedMenu }) {
  return sortedMenu.map((item) => {
    return (
      <div className="card" key={item.id}>
        <h2 className="tittel">{item.tittel}</h2>
        <p className="text">{item.tittel}</p>
        <p className="text">Pris: {item.pris}</p>
        <p className="text">Ingredienser: {item.ingredienser}</p>
      </div>
    );
  });
}
