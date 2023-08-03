type Item = {
  id: number;
  name: string;
  price: number;
};

class ItemsDB {
  private items: Item[] = [
    {
      id: 0,
      name: "Fideos",
      price: 100,
    },
    {
      id: 1,
      name: "Arroz",
      price: 120,
    },
    {
      id: 2,
      name: "Pan",
      price: 50,
    },
    {
      id: 3,
      name: "Huevo",
      price: 10,
    },
  ];
  public create(item: Omit<Item, "id">) {
    const lastId = this.items.length;
    this.items.push({ id: lastId, ...item });
  }
  public read(id?: number) {
    if (typeof id === "number") {
      const item = this.items.find((item) => item.id === id);
      return item ? [item] : [];
    }
    return this.items;
  }
  public update(item: Item) {
    this.items.splice(item.id, 1, item);
  }
  public delete(id: number) {
    this.items.splice(id, 1);
    this.items.map((item, i) => (item.id = i));
  }
}

export default new ItemsDB();
