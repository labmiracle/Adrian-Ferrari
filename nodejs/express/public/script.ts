class Fetcher {
  private baseUrl = "http://localhost:3000";

  public async getItems() {
    const response = await fetch(this.baseUrl + "/items");
    const data = await response.json();
    return data;
  }

  public async getItem(id: string) {
    const response = await fetch(this.baseUrl + `/items/${id}`);
    const data = await response.json();
    return data;
  }

  public async postItem(item: Omit<Item, "id">) {
    await fetch(this.baseUrl + "/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: item.name, price: item.price || 0 }),
    });
  }

  public async patchItem(item: Item) {
    await fetch(this.baseUrl + `/items/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: item.id, name: item.name, price: item.price || 0 }),
    });
  }

  public delete(id: string) {
    fetch(this.baseUrl + `/items/${id}`, {
      method: "DELETE",
    });
  }
}

const fetcher = new Fetcher();

const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const updateBtn = document.getElementById("update-btn") as HTMLButtonElement;
const cancelBtn = document.getElementById("cancel-btn") as HTMLButtonElement;
const searchBtn = document.getElementById("search-btn") as HTMLButtonElement;

const nameInput = document.getElementById("name-input")! as HTMLInputElement;
const priceInput = document.getElementById("price-input")! as HTMLInputElement;
const idInput = document.getElementById("id-input")! as HTMLInputElement;
const list = document.getElementById("list")! as HTMLTableElement;

let idToEdit = "";

type Item = {
  id: number;
  name: string;
  price: number;
};

function buildList(data: Item[]) {
  list.innerHTML = "";
  if (data.length === 0) {
    const row = list.insertRow(-1);
    const cell = row.insertCell(0);
    cell.colSpan = 4;
    cell.textContent = "No items";
    cell.style.textAlign = "center";
  }
  data.forEach((item: Item) => {
    const row = list.insertRow(-1);
    const idCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const priceCell = row.insertCell(2);
    const actionsCell = row.insertCell(3);
    idCell.textContent = String(item.id);
    nameCell.textContent = item.name;
    priceCell.textContent = "$" + String(item.price);
    actionsCell.innerHTML = `
    <button class="btn btn-delete" onclick="deleteItem(event)" data-id=${item.id}>[x]</button>
    <button class="btn btn-edit"  onclick="edit(event)" data-id=${item.id} data-name=${item.name} data-price=${item.price}>edit</button>`;
  });
}

async function updateState() {
  nameInput.value = "";
  priceInput.value = "";
  addBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
  const data = await fetcher.getItems();
  buildList(data);
}

function deleteItem(event: Event) {
  const { currentTarget } = event;
  if (!currentTarget) return;
  const id = (currentTarget as HTMLButtonElement).dataset.id;
  if (id) fetcher.delete(id);
  updateState();
}

function edit(event: Event) {
  addBtn.style.display = "none";
  updateBtn.style.display = "inline-block";
  cancelBtn.style.display = "inline-block";
  const { currentTarget } = event;
  if (!currentTarget) return;
  const id = (currentTarget as HTMLButtonElement).dataset.id;
  const name = (currentTarget as HTMLButtonElement).dataset.name;
  const price = (currentTarget as HTMLButtonElement).dataset.price;
  if (id) idToEdit = id;
  if (name) nameInput.value = name;
  if (price) priceInput.value = price;
  nameInput.focus();
}

updateBtn.addEventListener("click", async () => {
  if (idToEdit) await fetcher.patchItem({ id: +idToEdit, name: nameInput.value, price: +priceInput.value });
  updateState();
});

cancelBtn.addEventListener("click", updateState);

addBtn.addEventListener("click", async () => {
  await fetcher.postItem({ name: nameInput.value, price: +priceInput.value });
  updateState();
});

searchBtn.addEventListener("click", async () => {
  const id = idInput.value;
  const data = await fetcher.getItem(id);
  buildList(data);
});

window.onload = () => updateState();
