const baseUrl = "http://localhost:3000";
const nameInput = document.getElementById("name-input")! as HTMLInputElement;
const priceInput = document.getElementById("price-input")! as HTMLInputElement;
const idInput = document.getElementById("id-input")! as HTMLInputElement;
const list = document.getElementById("list")! as HTMLTableElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const updateBtn = document.getElementById("update-btn") as HTMLButtonElement;
const cancelBtn = document.getElementById("cancel-btn") as HTMLButtonElement;
const searchBtn = document.getElementById("search-btn") as HTMLButtonElement;

updateBtn.style.display = "none";
cancelBtn.style.display = "none";

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
    <button class="btn" onclick="delet(event)" data-id=${item.id}>[x]</button>
    <button class="btn" onclick="edit(event)" data-id=${item.id} data-name=${item.name} data-price=${item.price}>edit</button>`;
  });
}

async function updateList() {
  const response = await fetch(baseUrl + "/items");
  const data = await response.json();
  buildList(data);
}

function delet(event: Event) {
  const { currentTarget } = event;
  if (!currentTarget) return;
  const id = (currentTarget as HTMLButtonElement).dataset.id;
  fetch(baseUrl + `/items/${id}`, {
    method: "DELETE",
  });
  updateList();
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
  if (id) nameInput.dataset.id = id;
  if (name) nameInput.value = name;
  if (price) priceInput.value = price;
  nameInput.focus();
}

function update() {
  const id = nameInput.dataset.id;
  fetch(baseUrl + `/items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id, name: nameInput.value, price: priceInput.value || 0 }),
  });
  updateList();
  nameInput.value = "";
  priceInput.value = "";
  addBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
}

function cancel() {
  nameInput.value = "";
  priceInput.value = "";
  addBtn.style.display = "inline-block";
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
}

function add() {
  fetch(baseUrl + "/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: nameInput.value, price: priceInput.value || 0 }),
  });
  updateList();
  nameInput.value = "";
  priceInput.value = "";
}

async function search() {
  const id = idInput.value;
  const response = await fetch(baseUrl + `/items/${id}`);
  const data = await response.json();
  console.log(data);
  buildList(data);
}

window.onload = () => updateList();
