export type IngredientsTypes =
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

export type CraftablesTypes =
  | "iron-helmet"
  | "chestplate"
  | "leggings"
  | "boots"
  | "iron-sword"
  | "flint-and-steel"
  | "arrow"
  | "fishing-rod"
  | "cake"
  | "apple-pie"
  | "axe"
  | "cookie"
  | "pickaxe"
  | "bread"
  | "shovel"
  | "hoe"
  | "bow";

export type Craftables = {
  nameID: CraftablesTypes;
  position: { x: number; y: number };
  materials: IngredientsTypes[];
};

export const craftables: Craftables[] = [
  {
    nameID: "iron-helmet",
    position: { x: 0, y: 0 },
    materials: ["iron", "iron", "iron", "iron", "iron"],
  },
  {
    nameID: "chestplate",
    position: { x: 0, y: 48 },
    materials: ["iron", "iron", "iron", "iron", "iron", "iron", "iron", "iron"],
  },
  {
    nameID: "leggings",
    position: { x: 0, y: 96 },
    materials: ["iron", "iron", "iron", "iron", "iron", "iron", "iron"],
  },
  {
    nameID: "boots",
    position: { x: 0, y: 144 },
    materials: ["iron", "iron", "iron", "iron"],
  },
  {
    nameID: "iron-sword",
    position: { x: 0, y: 192 },
    materials: ["iron", "iron", "stick"],
  },
  {
    nameID: "flint-and-steel",
    position: { x: 48, y: 0 },
    materials: ["flint", "iron"],
  },
  {
    nameID: "arrow",
    position: { x: 48, y: 96 },
    materials: ["feather", "flint", "stick"],
  },
  {
    nameID: "fishing-rod",
    position: { x: 48, y: 192 },
    materials: ["stick", "stick", "stick", "string", "string"],
  },
  {
    nameID: "cake",
    position: { x: 96, y: 96 },
    materials: ["egg", "flour", "flour", "milk", "milk", "milk", "wheat", "wheat", "wheat"],
  },
  {
    nameID: "apple-pie",
    position: { x: 96, y: 144 },
    materials: ["apple", "egg", "flour"],
  },
  {
    nameID: "axe",
    position: { x: 96, y: 192 },
    materials: ["iron", "iron", "iron", "stick", "stick"],
  },
  {
    nameID: "cookie",
    position: { x: 144, y: 144 },
    materials: ["choco-chips", "wheat", "wheat"],
  },
  {
    nameID: "pickaxe",
    position: { x: 144, y: 192 },
    materials: ["iron", "iron", "iron", "iron", "iron", "stick", "stick"],
  },
  {
    nameID: "bread",
    position: { x: 192, y: 144 },
    materials: ["wheat", "wheat", "wheat"],
  },
  {
    nameID: "shovel",
    position: { x: 192, y: 192 },
    materials: ["iron", "stick", "stick"],
  },
  {
    nameID: "hoe",
    position: { x: 240, y: 144 },
    materials: ["iron", "iron", "stick", "stick"],
  },
  {
    nameID: "bow",
    position: { x: 48, y: 48 },
    materials: ["stick", "stick", "stick", "string", "string", "string"],
  },
];

export type Ingredients = {
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

export type APosition<T extends IngredientsTypes | CraftablesTypes> = T extends IngredientsTypes
  ? Ingredients[]
  : Craftables[];

export function getPosition<T extends IngredientsTypes | CraftablesTypes>(name: T, array: APosition<T>) {
  //arrFixed es para arreglar un bug de Typescript https://github.com/microsoft/TypeScript/issues/44373
  const arrFixed: Array<(typeof array)[number]> = array;
  const item = arrFixed.find((item: Craftables | Ingredients) => item.nameID === name);
  if (!item) return { x: 0, y: 0 };
  return item.position;
}
