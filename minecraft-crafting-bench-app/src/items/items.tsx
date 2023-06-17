type IngredientsTypes =
  | "iron"
  | "stick"
  | "feather"
  | "flint"
  | "apple"
  | "egg"
  | "milk"
  | "string"
  | "flour"
  | "choco-chips"
  | "wheat";

type Item = {
  nameID: string;
  position: { x: number; y: number };
  ingredients: IngredientsTypes[];
};

export const craftables: Item[] = [
  {
    nameID: "iron-helmet",
    position: { x: 0, y: 0 },
    ingredients: ["iron", "iron", "iron", "iron", "iron"],
  },
  {
    nameID: "chestplate",
    position: { x: 0, y: 48 },
    ingredients: ["iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron"],
  },
  {
    nameID: "leggings",
    position: { x: 0, y: 96 },
    ingredients: ["iron", "iron", "iron", "iron", "iron", "iron", "iron"],
  },
  {
    nameID: "boots",
    position: { x: 0, y: 144 },
    ingredients: ["iron", "iron", "iron", "iron"],
  },
  {
    nameID: "iron-sword",
    position: { x: 0, y: 192 },
    ingredients: ["iron", "iron", "stick"],
  },
  {
    nameID: "flint-and-steel",
    position: { x: 48, y: 0 },
    ingredients: ["iron", "flint"],
  },
  {
    nameID: "arrow",
    position: { x: 48, y: 96 },
    ingredients: ["flint", "stick", "feather"],
  },
  {
    nameID: "fishing-rod",
    position: { x: 48, y: 192 },
    ingredients: ["stick", "stick", "stick", "string", "string"],
  },
  {
    nameID: "cake",
    position: { x: 96, y: 96 },
    ingredients: ["milk", "milk", "milk", "flour", "flour", "egg", "wheat", "wheat", "wheat"],
  },
  {
    nameID: "apple-pie",
    position: { x: 96, y: 144 },
    ingredients: ["apple", "flour", "egg"],
  },
  {
    nameID: "axe",
    position: { x: 96, y: 192 },
    ingredients: ["iron", "iron", "iron", "stick", "stick"],
  },
  {
    nameID: "cookie",
    position: { x: 144, y: 144 },
    ingredients: ["wheat", "wheat", "choco-chips"],
  },
  {
    nameID: "pickaxe",
    position: { x: 144, y: 192 },
    ingredients: ["iron", "iron", "iron", "iron", "iron", "stick", "stick"],
  },
  {
    nameID: "bread",
    position: { x: 144, y: 192 },
    ingredients: ["wheat", "wheat", "wheat"],
  },
  {
    nameID: "shovel",
    position: { x: 192, y: 192 },
    ingredients: ["iron", "stick", "stick"],
  },
  {
    nameID: "hoe",
    position: { x: 240, y: 144 },
    ingredients: ["iron", "iron", "stick", "stick"],
  },
  {
    nameID: "bow",
    position: { x: 48, y: 48 },
    ingredients: ["stick", "stick", "stick", "string", "string", "string"],
  },
];

type Ingredients = {
  nameID: IngredientsTypes;
  position: { x: number; y: number };
};

export const ingredients: Ingredients[] = [
  {
    nameID: "iron",
    position: { x: 96, y: 48 },
  },
  {
    nameID: "stick",
    position: { x: 48, y: 144 },
  },
  {
    nameID: "flint",
    position: { x: 96, y: 0 },
  },
  {
    nameID: "apple",
    position: { x: 192, y: 0 },
  },
  {
    nameID: "egg",
    position: { x: 192, y: 48 },
  },
  {
    nameID: "milk",
    position: { x: 192, y: 96 },
  },
  {
    nameID: "string",
    position: { x: 240, y: 0 },
  },
  {
    nameID: "flour",
    position: { x: 240, y: 48 },
  },
  {
    nameID: "choco-chips",
    position: { x: 240, y: 96 },
  },
  {
    nameID: "feather",
    position: { x: 144, y: 0 },
  },
  {
    nameID: "wheat",
    position: { x: 144, y: 96 },
  },
];

export function getPosition(name: string, array: Item[] | Ingredients[]) {
  const item = array.find((item) => item.nameID === name);
  if (!item) return { x: 0, y: 0 };
  return item.position;
}
