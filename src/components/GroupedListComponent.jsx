import { Corner } from "./Corner";
import { Item } from "./Item";

export function GroupedListComponent({ items }) {
  // Grouping by Category
  const groupedItems = items.reduce((group, item) => {
    if (!group[item.kategori]) {
      group[item.kategori] = [];
    }
    group[item.kategori].push(item);
    return group;
  }, {});

  return (
    <>
      {Object.entries(groupedItems).map(([kategori, items]) => (
        <div className="kategori" key={kategori}>
          <h2 className="kategori-tittel">{kategori}</h2>
          <Corner key={kategori} />
          <Item items={items} />
        </div>
      ))}
    </>
  );
}
