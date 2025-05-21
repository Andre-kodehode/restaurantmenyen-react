import { Item } from "./Item";

export function Meny({ menu }) {
  const sortbyCategory = ["Forrett", "Hovedrett", "Dessert"];

  const sortedMenu = [...menu].sort((a, b) => {
    return (
      sortbyCategory.indexOf(a.kategori) - sortbyCategory.indexOf(b.kategori)
    );
  });

  return <Item sortedMenu={sortedMenu} />;
}
