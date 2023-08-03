var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var baseUrl = "http://localhost:3000";
var nameInput = document.getElementById("name-input");
var priceInput = document.getElementById("price-input");
var idInput = document.getElementById("id-input");
var list = document.getElementById("list");
var addBtn = document.getElementById("add-btn");
var updateBtn = document.getElementById("update-btn");
var cancelBtn = document.getElementById("cancel-btn");
var searchBtn = document.getElementById("search-btn");
updateBtn.style.display = "none";
cancelBtn.style.display = "none";
function buildList(data) {
    list.innerHTML = "";
    if (data.length === 0) {
        var row = list.insertRow(-1);
        var cell = row.insertCell(0);
        cell.colSpan = 4;
        cell.textContent = "No items";
        cell.style.textAlign = "center";
    }
    data.forEach(function (item) {
        var row = list.insertRow(-1);
        var idCell = row.insertCell(0);
        var nameCell = row.insertCell(1);
        var priceCell = row.insertCell(2);
        var actionsCell = row.insertCell(3);
        idCell.textContent = String(item.id);
        nameCell.textContent = item.name;
        priceCell.textContent = "$" + String(item.price);
        actionsCell.innerHTML = "\n    <button class=\"btn\" onclick=\"delet(event)\" data-id=".concat(item.id, ">[x]</button>\n    <button class=\"btn\" onclick=\"edit(event)\" data-id=").concat(item.id, " data-name=").concat(item.name, " data-price=").concat(item.price, ">edit</button>");
    });
}
function updateList() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(baseUrl + "/items")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    buildList(data);
                    return [2 /*return*/];
            }
        });
    });
}
function delet(event) {
    var currentTarget = event.currentTarget;
    if (!currentTarget)
        return;
    var id = currentTarget.dataset.id;
    fetch(baseUrl + "/items/".concat(id), {
        method: "DELETE",
    });
    updateList();
}
function edit(event) {
    addBtn.style.display = "none";
    updateBtn.style.display = "inline-block";
    cancelBtn.style.display = "inline-block";
    var currentTarget = event.currentTarget;
    if (!currentTarget)
        return;
    var id = currentTarget.dataset.id;
    var name = currentTarget.dataset.name;
    var price = currentTarget.dataset.price;
    if (id)
        nameInput.dataset.id = id;
    if (name)
        nameInput.value = name;
    if (price)
        priceInput.value = price;
    nameInput.focus();
}
function update() {
    var id = nameInput.dataset.id;
    fetch(baseUrl + "/items/".concat(id), {
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
function search() {
    return __awaiter(this, void 0, void 0, function () {
        var id, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = idInput.value;
                    return [4 /*yield*/, fetch(baseUrl + "/items/".concat(id))];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    buildList(data);
                    return [2 /*return*/];
            }
        });
    });
}
window.onload = function () { return updateList(); };
