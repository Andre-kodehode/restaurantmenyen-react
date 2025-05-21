import { Corner } from "./Corner";

export function Meny({ menu, corners }) {
  return (
    <>
      {menu.map((menu) => {
        return (
          <div className="card" key={menu.id}>
            <h2 className="tittel">{menu.tittel}</h2>
            <p className="text">{menu.tittel}</p>
            <p className="text">Pris: {menu.pris}</p>
            <p className="text">Ingredienser: {menu.ingredienser}</p>
            <p className="text">{menu.kategori}</p>
            <Corner corners={corners} />
          </div>
        );
      })}
    </>
  );
}
